<template>
  <div class="report">
    <h3>高铁飞机出行占比</h3>
    <div id="tripmoderatio-chart-dom"></div>
  </div>
</template>

<script>
import { getTripmodeRatio } from "@/api/index.js";
export default {
  name: "tripModeRatioChart",
  components: {},
  data() {
    return {
      pieData: []
    };
  },
  created() {},
  mounted() {
    var that = this;
    // 先获取飞机高铁出行占比
    that.getTripModeRatio();
  },
  methods: {
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(
        document.getElementById("tripmoderatio-chart-dom")
      );
      // 绘制图表
      myChart1.setOption({
        color: ["#4bccec", "#a680ff"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: 10,
          top: "middle",
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        series: [
          {
            name: "高铁飞机出行占比",
            type: "pie",
            radius: ["54%", "74%"],
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "18"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.pieData
          }
        ]
      });
    },
    getTripModeRatio() {
      //  接口获取高铁飞机出行量
      let that = this;
      getTripmodeRatio().then(res => {
        that.pieData = res;
        //绘制饼图
        that.drawPie();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.report {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  #tripmoderatio-chart-dom {
    width: 70%;
    flex: 1;
  }
}
</style>
