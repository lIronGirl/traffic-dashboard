<template>
  <main id="trafficPredictionPage">
    <section class="section1">
      <div class="line-chart">
        <h3>交通枢纽客流预测</h3>
        <Table height="500" stripe highlight-row :columns="rankColumns" :data="rankTableData"></Table>
      </div>
      <div class="line-chart">
        <h3>联程客流预测</h3>
        <div class="individual-selector">
          <label style="text-align: 100px;" for>联程路线</label>
          <Select v-model="staticCity" filterable @on-change="getWeekPrediction">
            <Option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
        </div>
        <div id="static-chart-dom"></div>
      </div>
    </section>
  </main>
</template>

<script>
// import BgMap from "../components/MyMap4";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn", {
  calendar: {
    sameDay: "[今日\n]" + "MM/DD",
    nextDay: "[明日\n]" + "MM/DD",
    nextWeek: "dddd" + "[\n]" + "MM/DD",
    lastDay: "[昨日\n]" + "MM/DD",
    lastWeek: "[上个] dddd",
    sameElse: "DD/MM/YYYY"
  }
});

import {
  getWeekPrediction,
  getHubTrafficPrediction,
  getJamTrendPrediction,
  getJamNextDayTrendPrediction
} from "@/api/index.js";

export default {
  name: "trafficPredictionPage",
  components: {
    // BgMap
  },
  data() {
    return {
      staticCity: 1,
      cityList: [
        {
          id: 1,
          name: "北京南站-天津站-滨海机场"
        },
        {
          id: 2,
          name: "北京西站-正定高铁站-正定机场"
        },
        {
          id: 3,
          name: "滨海国际机场-天津站-北京南站"
        },
        {
          id: 4,
          name: "正定机场-正定高铁站-北京西站"
        }
      ],
      staticContent: "duration",
      staticsData: {},
      jamTrendData: [],
      jamNextDayTrendData: [],
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
          // width: 150,
          align: "center",
          key: "hubName"
        },
        {
          title: "当前小时客流量",
          // width: 150,
          key: "bearingCapacity",
          align: "center"
        },
        {
          title: "未来小时客运量",
          key: "psgvolNext1h",
          align: "center"
          // width: 200
        },
        {
          title: "未来日客运量",
          key: "psgvolNext1d",
          align: "center"
        }
      ],
      rankTableData: [],
      mapData: []
    };
  },
  mounted() {
    this.getWeekPrediction();
    this.getHubTrafficPrediction();
    // this.getJamTrendPrediction();
    // this.getJamNextDayTrendPrediction();
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
          right: 50
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
            axisLabel: { color: "#fff", formatter: "{value}人" },
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
    drawJamTrendColumnChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      let staticChart = this.$echarts.init(
        document.getElementById("jamtrendcolumn-chart-dom")
      );
      staticChart.setOption({
        color: ["#ec4b4b", "#eca54b", "#ece84b", "#4bec85"],
        legend: {
          show: false
        },
        visualMap: [
          {
            left: "center",
            top: "top",
            orient: "horizontal",
            dimension: 2,
            categories: ["严重拥堵", "拥堵", "缓行", "通畅"],
            inRange: {
              color: ["#ec4b4b", "#eca54b", "#ece84b", "#4bec85"]
            },
            textStyle: {
              color: "#fff",
              fontSize: 14
            }
          }
        ],
        grid: {
          bottom: 50,
          top: 40
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          data: that.jamTrendData.time
        },
        yAxis: {
          type: "value",
          axisTick: { show: false },
          axisLabel: { color: "#fff" },
          axisLine: { show: false },
          splitLine: { lineStyle: { color: "#333" } }
        },
        series: [
          {
            type: "bar",
            barWidth: 24,
            data: that.jamTrendData.seriesData
          }
        ]
      });
    },
    drawJamNextDayTrendLineChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      let staticChart = this.$echarts.init(
        document.getElementById("jamnextdaytrendline-chart-dom")
      );
      staticChart.setOption({
        color: ["#ec4b4b", "#eca54b", "#ece84b", "#4bec85"],
        legend: {
          show: false
        },
        visualMap: {
          top: "top",
          left: "center",
          orient: "horizontal",
          inverse: true,
          pieces: [
            {
              gt: 0,
              lte: 1.2,
              color: "#4bec85",
              label: "通畅"
            },
            {
              gt: 1.2,
              lte: 1.5,
              color: "#ece84b",
              label: "缓行"
            },
            {
              gt: 1.5,
              lte: 1.8,
              color: "#eca54b",
              label: "拥堵"
            },
            {
              gt: 1.8,
              color: "#ec4b4b",
              label: "严重拥堵"
            }
          ],
          outOfRange: {
            color: "#999"
          },
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        grid: {
          bottom: 100,
          top: 40
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          data: that.jamNextDayTrendData.time
        },
        yAxis: {
          type: "value",
          axisTick: { show: false },
          axisLabel: { color: "#fff" },
          axisLine: { show: false },
          splitLine: { lineStyle: { color: "#333" } }
        },
        series: [
          {
            type: "line",
            data: that.jamNextDayTrendData.seriesData,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 1.2
                },
                {
                  yAxis: 1.5
                },
                {
                  yAxis: 1.8
                }
              ]
            }
          }
        ]
      });
    },
    getWeekPrediction() {
      let that = this;
      getWeekPrediction(that.staticCity === 0 ? null : that.staticCity).then(
        res => {
          let time = [];
          let series = [];
          let histroyVal = [];
          let predictVal = [];
          res.forEach((data, i) => {
            if (data.h) {
              histroyVal[i] = data.h;
              time.push(
                moment()
                  .add(+data.date - 24, "day")
                  .hour(+data.time)
                  .format("MM/DD")
              );
            } else {
              predictVal[i] = data.p;
              time.push(
                moment()
                  .add(1, "day")
                  .hour(+data.time)
                  .format("MM/DD")
              );
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
        }
      );
    },
    getJamTrendPrediction(hubName) {
      let that = this;

      that.jamTrendData = {
        time: [],
        seriesData: []
      };
      getJamTrendPrediction(hubName).then(res => {
        let typeList = ["严重拥堵", "拥堵", "缓行", "通畅"];
        for (let index = 0; index < res.length; index++) {
          const item = res[index];
          that.jamTrendData.time.push({
            value: moment(item.time).calendar(),
            textStyle: { color: index === 1 ? "#ec4b4b" : "#fff" }
          });
          that.jamTrendData.seriesData.push([
            index,
            item.index,
            typeList[+item.type - 1]
          ]);
        }
        that.drawJamTrendColumnChart();
      });
    },
    getJamNextDayTrendPrediction(hubName) {
      let that = this;

      that.jamNextDayTrendData = {
        time: [],
        seriesData: []
      };
      getJamNextDayTrendPrediction(hubName).then(res => {
        for (let index = 0; index < res.length; index++) {
          const item = res[index];
          that.jamNextDayTrendData.time.push(item.time);
          that.jamNextDayTrendData.seriesData.push(item.index);
        }
        that.drawJamNextDayTrendLineChart();
      });
    },
    getHubTrafficPrediction() {
      let that = this;
      getHubTrafficPrediction(that.stationType).then(res => {
        that.rankTableData = res;
      });
    },
    updatePredictionChart(hubName) {
      let that = this;
      if (hubName) {
        that.getJamTrendPrediction(hubName);
        that.getJamNextDayTrendPrediction(hubName);
      } else {
        that.jamNextDayTrendData = {
          time: [],
          seriesData: []
        };
        that.jamTrendData = {
          time: [],
          seriesData: []
        };
        that.drawJamTrendColumnChart();
        that.drawJamNextDayTrendLineChart();
      }
    },
    selectRow(row) {
      let data = row;
      let that = this;
      that.updatePredictionChart(data.hubName);
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
    margin-top: 80px;
    .line-chart {
      flex: 0.6;
      width: 45%;
      height: 70%;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      .individual-selector {
        flex: 0.1;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        margin-bottom: -1px;
        label {
          flex: 0.2;
          text-align: center;
        }
        .ivu-select {
          flex: 0.5;
        }
      }
      #static-chart-dom {
        flex: 0.8;
      }
    }
    .jamtrendcolumn-chart {
      flex: 0.4;
      margin: 20px 0 10px 20px;
      #jamtrendcolumn-chart-dom {
        height: 90%;
      }
    }
  }
  .section2 {
    .rank-table {
      flex: 0.6;
      width: 60%;
      height: 80%;
      padding: 20px 55px 10px 0px;
      overflow: hidden;
      .ivu-tabs {
        margin-left: 58px;
      }
    }
    .jamnextdaytrendline-chart {
      flex: 0.4;
      margin: 20px 0 10px 20px;
      #jamnextdaytrendline-chart-dom {
        height: 85%;
      }
    }
  }
}
</style>