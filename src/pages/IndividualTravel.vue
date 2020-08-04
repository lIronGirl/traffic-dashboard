<template>
  <div id="individualTravel">
    <div class="content">
      <div class="part statistical-chart">
        <h3>联程出行统计</h3>
        <Table
          :height="514"
          stripe
          highlight-row
          ref="currentRowTable"
          :columns="connectingTripColumns"
          :data="connectingTripData"
          @on-row-click="selectRow"
        ></Table>
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
          ref="individualCurrentRowTable"
          :columns="rankColumns"
          :data="rankTableData"
          @on-row-click="selectIndividualRow"
        ></Table>
      </div>
    </div>

    <bg-map class="bg-map" :mapData="mapData"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap4";
import {
  getConnectingTripRank,
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
      currnetActiveTable: 1, // 1:联程出行统计表，2:个体出行表
      connectingTripColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "热门路线",
          key: "popularRoutes"
        },
        {
          title: "出行量",
          key: "travelVol",
          align: "right",
          width: 120
        }
      ],
      connectingTripData: [],
      individualList: [],
      individual: "--ALL--",
      rankColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "序号"
        },
        {
          title: "出行个体",
          width: 90,
          key: "name"
        },
        {
          title: "出行链路",
          width: 200,
          key: "route"
        },
        {
          title: "出行方式",
          key: "travelBy"
        }
      ],
      rankTableData: [],
      mapData: []
    };
  },
  mounted() {
    this.getConnectingTripRank();
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
        let tableData = [];
        for (let i = 0; i < res.length; i++) {
          const data = res[i],
            period = 5;
          let lines = [],
            points = [],
            route = [],
            travelBy = [];
          for (let k = 0; k < data.points.length; k++) {
            const point = data.points[k],
              symbols = ["plane", "rail", "car"],
              symbolsRc = ["飞机", "轨道", "汽车"];
            points.push({
              name: point.name,
              value: point.coords
            });
            route.push(point.name);
            if (k < data.points.length - 1) {
              let nextPoint = data.points[k + 1];
              lines.push({
                coords: [point.coords, nextPoint.coords],
                delay: period * k,
                symbol: symbols[point.by - 1] // 1:飞机，2:轨道，3:汽车
              });
              travelBy.push(symbolsRc[point.by - 1]);
            }
          }
          tableData.push({
            name: data.name,
            route: route.join("-"),
            travelBy: travelBy.join("-"),
            mapData: {
              points: points,
              moveLines: lines
            }
          });
        }

        that.rankTableData = tableData;

        if (
          (that.individual !== "--ALL--" && tableData[0]) ||
          that.currnetActiveTable === 2
        ) {
          tableData[0]._highlight = true;
          that.selectIndividualRow(tableData[0]);
        }
      });
    },
    getConnectingTripRank() {
      let that = this;
      getConnectingTripRank().then(res => {
        let tableData = [];
        for (let i = 0; i < res.length; i++) {
          const data = res[i],
            period = 5;
          let stations = [],
            lines = [],
            points = [];
          for (let k = 0; k < data.points.length; k++) {
            const point = data.points[k],
              symbols = ["plane", "rail", "car"];
            stations.push(point.name);
            points.push({
              name: point.name,
              value: point.coords
            });
            if (k < data.points.length - 1) {
              let nextPoint = data.points[k + 1];
              lines.push({
                coords: [point.coords, nextPoint.coords],
                delay: period * k,
                symbol: symbols[point.by - 1] // 1:飞机，2:轨道，3:汽车
              });
            }
          }
          tableData.push({
            popularRoutes: stations.join("-"),
            travelVol: data.travelVol,
            mapData: {
              points: points,
              moveLines: lines
            }
          });
        }

        that.connectingTripData = tableData;
        if (that.connectingTripData[0]) {
          let data = that.connectingTripData[0];
          data._highlight = true;
          that.mapData = data.mapData;
        }
      });
    },
    selectRow(row) {
      let data = row;
      let that = this;
      that.currnetActiveTable = 1;
      this.$refs.individualCurrentRowTable.clearCurrentRow();
      that.mapData = data.mapData;
    },
    selectIndividualRow(row) {
      let data = row;
      let that = this;
      that.currnetActiveTable = 2;
      this.$refs.currentRowTable.clearCurrentRow();
      that.mapData = data.mapData;
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