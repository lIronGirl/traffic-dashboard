<template>
  <main id="trafficPredictionPage">
    <section class="section1">
      <div class="line-chart">
        <h3>未来一周交通预测</h3>
        <RadioGroup
          v-model="staticCity"
          type="button"
          size="small"
          style="float: left;"
          @on-change="getWeekPrediction"
        >
          <Radio label="ALL">整体</Radio>
          <Radio label="BJ">北京</Radio>
          <Radio label="TJ">天津</Radio>
          <Radio label="HB">河北</Radio>
        </RadioGroup>
        <div id="static-chart-dom"></div>
      </div>
      <div class="radar-chart">
        <h3>预测变量对比</h3>
        <div id="radar-chart-dom"></div>
      </div>
    </section>
    <section class="section2">
      <div class="rank-table">
        <h3>交通枢纽出行预测排行</h3>
        <Tabs v-model="stationType" size="small" type="card" @on-click="getHubTrafficPrediction">
          <TabPane label="火车站" name="rail">
            <Table
              :height="440"
              stripe
              highlight-row
              :columns="rankColumns"
              :data="rankTableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
          <TabPane label="机场" name="air">
            <Table
              :height="440"
              stripe
              highlight-row
              :columns="rankColumns"
              :data="rankTableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
          <TabPane label="高速收费站" name="highway">
            <Table
              :height="440"
              stripe
              highlight-row
              :columns="rankColumns"
              :data="rankTableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
        </Tabs>
      </div>
      <div class="index-map">
        <h3>指数地图</h3>
      </div>
    </section>
    <!-- <bg-map class="bg-map" :mapData="mapData"></bg-map> -->
  </main>
</template>

<script>
// import BgMap from "../components/MyMap4";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

import {
  getWeekPrediction,
  getPredictionVarCompare,
  getHubTrafficPrediction
} from "@/api/index.js";

export default {
  name: "trafficPredictionPage",
  components: {
    // BgMap
  },
  data() {
    return {
      staticCity: "ALL",
      staticContent: "duration",
      staticsData: {},
      radarData: [],
      stationType: "rail",
      rankColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "枢纽名称",
          key: "hubName"
        },
        {
          title: "出行数量",
          key: "count"
        },
        {
          title: "出行指数",
          key: "index"
        }
      ],
      rankTableData: [],
      mapData: []
    };
  },
  mounted() {
    this.getWeekPrediction();
    this.getPredictionVarCompare();
    this.getHubTrafficPrediction();
  },
  methods: {
    drawLineChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      let staticChart = this.$echarts.init(
        document.getElementById("static-chart-dom")
      );
      // 绘制图表
      staticChart.setOption({
        // color: ["#4bccec", "#a680ff"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
          bottom: 50,
          top: 10,
          right: 100
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
          },
          {
            type: "category",
            show: false
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLabel: { color: "#fff" },
            axisLine: { show: false },
            splitLine: { lineStyle: { color: "#333" } }
          },
          {
            type: "value",
            show: false
          }
        ],
        series: that.staticsData.series
      });
    },
    drawRadarChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      let staticChart = this.$echarts.init(
        document.getElementById("radar-chart-dom")
      );
      staticChart.setOption({
        color: ["#4bccec", "#a680ff"],
        radar: {
          name: {
            textStyle: {
              color: "#fff"
            }
          },
          indicator: [
            { name: "路网高延时运行时间比", max: 1 },
            { name: "路网拥堵路段里程比", max: 1 },
            { name: "常发拥堵路段里程比", max: 1 },
            { name: "路网高峰行程延迟指数", max: 1 },
            { name: "道路运行速度偏差率", max: 1 },
            { name: "高峰平均速度", max: 1 }
          ]
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: that.radarData
              }
            ]
          }
        ]
      });
    },
    getWeekPrediction() {
      let that = this;
      getWeekPrediction(
        that.staticCity === "ALL" ? null : that.staticCity
      ).then(res => {
        let time = [];
        let series = [];
        let histroyVal = [];
        let predictVal = [];
        res.forEach((data, i) => {
          let isHistroy = data.type === 1;
          time.push(moment(data.time).format("MM/DD"));
          if (isHistroy) {
            histroyVal[i] = data.index;
          } else {
            predictVal[i] = data.index;
          }
        });
        histroyVal[histroyVal.length] = predictVal[histroyVal.length];
        series = [
          {
            name: "真实值",
            type: "line",
            data: histroyVal,
            itemStyle: {
              normal: {
                color: "#4bccec"
              }
            }
          },
          {
            name: "预测值",
            type: "line",
            data: predictVal,
            itemStyle: {
              normal: {
                color: "#a680ff"
              }
            }
          }
        ];
        that.staticsData = {
          time: time,
          series: series
        };
        that.drawLineChart();
      });
    },
    getPredictionVarCompare() {
      let that = this;
      getPredictionVarCompare().then(res => {
        that.radarData = res;
        that.drawRadarChart();
      });
    },
    getHubTrafficPrediction() {
      let that = this;
      getHubTrafficPrediction(that.stationType).then(res => {
        that.rankTableData = res;
      });
    },
    selectRow(row) {
      let data = row;
      let that = this;
      that.mapData = {
        citys: [
          {
            name: data.src,
            series: data.srcCoords
          },
          {
            name: data.dest,
            series: data.destCoords
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
#trafficPredictionPage {
  width: 100%;
  height: 98%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  padding: 20px;
  // height: 84%;
  section {
    flex: 1;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
  }
  .section1 {
    .line-chart {
      flex: 2;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      .ivu-radio-group {
        flex: 0.1;
      }
      #static-chart-dom {
        flex: 0.9;
      }
    }
    .radar-chart {
      flex: 1;
      #radar-chart-dom {
        height: 90%;
      }
    }
  }
  .section2 {
    .rank-table {
      flex: 2;
      width: 70%;
      height: 90%;
    }
    .index-map {
      flex: 1;
    }
  }
}
</style>