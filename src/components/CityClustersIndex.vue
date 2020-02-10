<template>
  <div class="report">
    <h3>城市群指标</h3>
    <table>
      <thead>
        <tr>
          <td>城市名</td>
          <td>人均GDP（万）</td>
          <td>总人口（万）</td>
          <td>景区总数</td>
        </tr>
      </thead>
    </table>
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
        <tr v-for="(item,index) in tableData" :key="index">
          <td>{{ item.city }}</td>
          <td>{{ item.GDP }}</td>
          <td>{{ item.population }}</td>
          <td>{{ item.scenicSpotsCount }}</td>
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
        { city: "Beijing", GDP: 14, population: 2300, scenicSpotsCount: 150 },
        { city: "Shanghai", GDP: 15, population: 2000, scenicSpotsCount: 100 },
        { city: "Beijing", GDP: 14, population: 2300, scenicSpotsCount: 150 }
      ];
    }
  }
};
</script>

<style lang="less" scoped>
table {
  width: 80%;
}
</style>
