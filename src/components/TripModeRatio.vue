<template>
  <div class="report">
    <h3>高铁飞机出行占比</h3>
    <div id="tripmoderatio-chart-dom"></div>
  </div>
</template>

<script>
export default {
  name: "tripModeRatioChart",
  components: {},
  data() {
    return {
      pieData: []
    };
  },
  created() {
    var that = this;
    // 先获取飞机高铁出行占比
    that.getTripModeRatio();
  },
  mounted() {
    //绘制饼图
    this.drawPie();
  },
  methods: {
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(
        document.getElementById("tripmoderatio-chart-dom")
      );
      // 绘制图表
      myChart1.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: 10,
          top: 'middle',
          data: ["高铁出行", "飞机出行"]
        },
        series: [
          {
            name: "高铁飞机出行占比",
            type: "pie",
            radius: ["50%", "70%"],
            center: ['30%', '50%'],
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
      this.pieData = [
        { value: 335, name: "高铁出行" },
        { value: 310, name: "飞机出行" }
      ];
    }
  }
};
</script>

<style lang="less" scoped>
.report {
  #tripmoderatio-chart-dom {
    width: 70%;
    height: 304px;
  }
}
</style>
