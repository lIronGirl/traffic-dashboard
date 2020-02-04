<template>
  <div class="report">
    <h3>城市群指标</h3>
    <table class="table" id="city-clusters-index-table">
      <thead>
        <tr>
          <td>城市名</td>
          <td>人均GDP（万）</td>
          <td>总人口（万）</td>
          <td>景区总数</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>上海</td>
          <td>15</td>
          <td>4500</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "cityClustersIndex",
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  created() {
    var that = this;
    // 先获取指数数据
    that.getCCI();
  },
  mounted() {},
  methods: {
    getCCI() {
      //  接口:获取指数数据
      this.tableData = [
        { city: "Shanghai", GDP: 15, population: 2000, scenicSpotsCount: 100 },
        { city: "Beijing", GDP: 14, population: 2300, scenicSpotsCount: 150 }
      ];
    }
  }
};
</script>

<style lang="less" scoped>
.report {
  #tripmoderatio-chart-dom {
    width: 50%;
    height: 204px;
  }
}
</style>
