<template>
  <div id="individualTravel">
    <div class="content">
      <div class="part statistical-chart">
        <h3>京津冀最近24小时出行统计</h3>
        <div class="static-filter clearfix">
          <RadioGroup
            v-model="staticCity"
            type="button"
            size="small"
            style="float: left;"
            @on-change="getStaticsData"
          >
            <Radio label="BJ">北京</Radio>
            <Radio label="TJ">天津</Radio>
            <Radio label="HB">河北</Radio>
          </RadioGroup>
          <RadioGroup
            v-model="staticContent"
            type="button"
            size="small"
            style="float: right;"
            @on-change="getStaticsData"
          >
            <Radio label="duration">出行时长</Radio>
            <Radio label="distance">出行距离</Radio>
          </RadioGroup>
        </div>
        <div id="static-chart-dom"></div>
      </div>
      <div class="part rank-table">
        <h3>个体出行排行</h3>
        <div class="individual-selector">
          <label style="text-align: left;" for>个体查询</label>
          <Select v-model="individual" filterable label-in-value @on-change="getIndividualRank">
            <Option
              v-for="item in individualList"
              :value="item.name"
              :key="item.name"
            >{{ item.name }}</Option>
          </Select>
        </div>
        <Table
          :height="514"
          stripe
          highlight-row
          :columns="rankColumns"
          :data="rankTableData"
          @on-row-click="selectRow"
        ></Table>
      </div>
    </div>

    <bg-map class="bg-map" :mapData="mapData"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap4";
import {
  getTravelTimeStatics,
  getTravelDistanceStatics,
  getIndividualList,
  getIndividualRank
} from "@/api/index.js";

export default {
  name: "individualTravel",
  components: {
    BgMap
  },
  data() {
    return {
      staticCity: "BJ",
      staticContent: "duration",
      staticsData: {},
      individualList: [],
      individual: "--ALL--",
      rankColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "出行个体",
          key: "name"
        },
        {
          title: "出行时长（小时）",
          key: "duration",
          align: "right"
        },
        {
          title: "出发地",
          key: "src"
        },
        {
          title: "目的地",
          key: "dest"
        }
      ],
      rankTableData: [],
      mapData: []
    };
  },
  mounted() {
    this.getStaticsData();
    this.getIndividualList();
    this.getIndividualRank();
  },
  methods: {
    drawChart() {
      let that = this;
      let seriesType = that.staticContent === "duration" ? "bar" : "line";
      // 基于准备好的dom，初始化echarts实例
      let staticChart = this.$echarts.init(
        document.getElementById("static-chart-dom")
      );
      // 绘制图表
      staticChart.setOption({
        color: ["#4bccec", "#a680ff"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
          bottom: 50,
          top: 10,
          right: 10
        },
        legend: {
          left: "center",
          top: "bottom",
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            data: that.staticsData.time
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLabel: { color: "#fff" },
            axisLine: { show: false },
            splitLine: { lineStyle: { color: "#333" } }
          }
        ],
        series: [
          {
            name: "出行",
            type: seriesType,
            barGap: 0,
            data: that.staticsData.outTravel
          },
          {
            name: "到达",
            type: seriesType,
            data: that.staticsData.inTravel
          }
        ]
      });
    },
    getStaticsData() {
      let that = this;
      if (that.staticContent === "duration") {
        getTravelTimeStatics(that.staticCity).then(res => {
          let time = [];
          let inTravel = [];
          let outTravel = [];
          res.forEach(data => {
            time.push(data.time);
            inTravel.push(data.inTravel);
            outTravel.push(data.outTravel);
          });

          that.staticsData = {
            time: time,
            inTravel: inTravel,
            outTravel: outTravel
          };
          that.drawChart();
        });
      } else {
        getTravelDistanceStatics(that.staticCity).then(res => {
          let time = [];
          let inTravel = [];
          let outTravel = [];
          res.forEach(data => {
            time.push(data.time);
            inTravel.push(data.inTravel);
            outTravel.push(data.outTravel);
          });

          that.staticsData = {
            time: time,
            inTravel: inTravel,
            outTravel: outTravel
          };
          that.drawChart();
        });
      }
    },
    getIndividualList() {
      var that = this;
      getIndividualList().then(res => {
        that.individualList = [{ id: 0, name: "--ALL--" }].concat(res);
      });
    },
    getIndividualRank() {
      let that = this;
      getIndividualRank(
        that.individual === "--ALL--" ? null : that.individual
      ).then(res => {
        that.rankTableData = res;
        if (that.rankTableData[0]) {
          let data = that.rankTableData[0];
          data._highlight = true;
          that.mapData = {
            citys: [
              {
                name: data.src,
                value: data.srcCoords
              },
              {
                name: data.dest,
                value: data.destCoords
              }
            ],
            moveLines: [
              {
                coords: [data.srcCoords, data.destCoords]
              }
            ]
          };
        }
      });
    },
    selectRow(row) {
      let data = row;
      let that = this;
      that.mapData = {
        citys: [
          {
            name: data.src,
            value: data.srcCoords
          },
          {
            name: data.dest,
            value: data.destCoords
          }
        ],
        moveLines: [
          {
            coords: [data.srcCoords, data.destCoords]
          }
        ]
      };
    }
  }
};
</script>

<style lang="less" scoped>
#individualTravel {
  width: 100%;
  height: 100%;
  .content {
    width: 30%;
    height: 100%;
    position: absolute;
    left: 20px;
    z-index: 2;
    .part {
      padding: 16px;
      margin-bottom: 16px;
      background-color: rgba(255, 255, 255, 0.05);
      &.statistical-chart {
        height: 30%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        .static-filter {
          flex: 0.2;
        }
        #static-chart-dom {
          width: 100%;
          flex: 1;
        }
      }
      &.rank-table {
        .individual-selector {
          display: flex;
          display: -webkit-flex;
          flex-direction: row;
          margin-bottom: 8px;
          label {
            flex: 0.2;
          }
          .ivu-select {
            flex: 0.8;
          }
        }
        // height: 80%;
      }
    }
  }
}
</style>