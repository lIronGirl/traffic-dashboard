<template>
  <div class="report">
    <h3>城市群指标</h3>
    <RadioGroup v-model="type" type="button">
      <Radio label="1">全国Top5城市</Radio>
      <Radio label="2">京津冀城市群</Radio>
    </RadioGroup>
    <Table :height="300" stripe :columns="indexColumns" :data="tableData"></Table>
  </div>
</template>

<script>
import { getCityClustersIndex } from "@/api/index.js";

export default {
  name: "cityClustersIndex",
  components: {},
  data() {
    return {
      tableData: [],
      type: "1",
      indexColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "城市",
          key: "city"
        },
        {
          title: "人口（万人）",
          align: "right",
          key: "population"
        },
        {
          title: "场站数量",
          align: "right",
          key: "stationCount"
        },
        {
          title: "日均交通量",
          align: "right",
          key: "avgDailyTraffic"
        }
      ]
    };
  },
  created() {
    var that = this;
    // 先获取指数数据
    that.getCityClustersIndex(1);
  },
  watch: {
    type: function(newVal) {
      this.getCityClustersIndex(newVal);
    }
  },
  methods: {
    getCityClustersIndex(type) {
      var that = this;
      //  接口:获取指数数据
      getCityClustersIndex(type).then(res => {
        that.tableData = res;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.report {
  height: 100%;
}
table {
  width: 80%;
}
.ivu-radio-group-button .ivu-radio-wrapper {
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
  border-color: #dcdee2ba;
}
.ivu-radio-group-button .ivu-radio-wrapper-checked {
  border-color: #4bccec;
}
</style>
