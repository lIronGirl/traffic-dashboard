<template>
  <div id="individualTravel">
    <div class="content">
      <div class="part line-table">
        <h3>联程客运出行分析</h3>
        <Table
          height="340"
          stripe
          ref="currentRowTable"
          :columns="connectingTripColumns"
          :data="connectingTripData"
          :show-header="showHeader"
          @on-selection-change="selectionChange"
        ></Table>
      </div>
      <div class="part statistical-chart">
        <h3>出行特征分析</h3>
        <div id="static-chart-dom"></div>
      </div>
    </div>

    <bg-map class="bg-map" :mapData="mapData" :mapPoints="mapPoints"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap4";
import { getConnectingTripRank, getLines } from "@/api/index.js";

export default {
  name: "individualTravel",
  components: {
    BgMap
  },
  data() {
    return {
      showHeader: false,
      currentActiveTable: 1, // 1:联程出行统计表，2:个体出行表
      connectingTripColumns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "热门路线",
          key: "popularRoutes",
          align: "right",
          width: 250
        },
        {
          title: "出行量",
          key: "travelVol",
          align: "left",
          render: (h, params) => {
            let width = params.row.volPer;
            return h("div", [
              h("span", {
                style: {
                  display: "inline-block",
                  width: width,
                  height: "14px",
                  background: "#4cccec",
                  verticalAlign: "middle",
                  marginRight: "8px"
                }
              }),
              h("span", {}, params.row.travelVol)
            ]);
          }
        }
      ],
      connectingTripData: [],
      individualList: [],
      individual: "--ALL--",
      rankColumns: [
        {
          key: "seq",
          width: 60,
          align: "right",
          title: "序号"
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
      lines: {},
      rankTableData: [],
      mapData: [],
      mapPoints: []
    };
  },
  mounted() {
    this.getConnectingTripRank();
    this.drawChart();
    this.getLines();
  },
  methods: {
    drawChart(series) {
      // let that = this;
      // 基于准备好的dom，初始化echarts实例
      let staticChart = this.$echarts.init(
        document.getElementById("static-chart-dom")
      );
      staticChart.clear();
      // 绘制图表
      staticChart.setOption({
        color: [
          "#4bccec",
          "#a680ff",
          "#ec4b4b",
          "#eca54b",
          "#ece84b",
          "#4bec85"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}时: {c}%"
        },
        grid: {
          bottom: 50,
          top: 10,
          right: 10
        },
        legend: {
          type: "scroll",
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
            axisLabel: { formatter: "{value}时" },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            data: [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLabel: { color: "#fff", formatter: "{value}%" },
            axisLine: { show: false },
            splitLine: { lineStyle: { color: "#333" } }
          }
        ],
        series: series
      });
    },
    getLines() {
      var that = this;
      getLines().then(res => {
        that.lines = res;
      });
    },
    getConnectingTripRank() {
      let that = this;
      getConnectingTripRank().then(res => {
        let tableData = [];
        let allVol = 0;
        res.forEach(data => {
          allVol += +data.travelVol;
        });
        res.forEach(data => {
          data.volPer = ((+data.travelVol * 100) / allVol).toFixed(2) + "%";
        });
        tableData = res;
        that.connectingTripData = tableData;
        that.mapData = [];
        /* for (let i = 0; i < res.length; i++) {
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
        } */
      });
    },
    selectionChange(selection) {
      let that = this;
      let series = [];
      let mapData = [];
      selection.forEach(s => {
        series.push({
          name: s.popularRoutes,
          type: "line",
          data: that.lines[s.popularRoutes]
        });
        mapData.push(s.popularRoutes.split("-"));
      });
      that.drawChart(series);
      that.mapData = mapData;
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
      &.line-table {
        height: 45%;
      }
      &.statistical-chart {
        height: 35%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        #static-chart-dom {
          width: 100%;
          flex: 1;
        }
      }
    }
  }
}
</style>