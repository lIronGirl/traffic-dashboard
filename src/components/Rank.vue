<template>
  <div>
    <h3 class="align-right">出行量排行榜</h3>
    <Table id="rank-table" :height="viewHeight+38" stripe :columns="rankColumns" :data="tableData"></Table>
  </div>
</template>

<script>
import { getCityTrafficRank } from "@/api/index.js";
let tableDom = null;
let timer = null;
export default {
  data() {
    return {
      rankColumns: [
        {
          type: "index",
          width: 50,
          align: "right"
        },
        {
          title: "城市",
          key: "name",
          width: 100
        },
        {
          title: "发生量",
          key: "occur"
        },
        {
          title: "吸引量",
          key: "attr"
        },
        {
          title: "高铁出行量",
          key: "rail"
        },
        {
          title: "飞机出行量",
          key: "air"
        }
      ],
      tableData: [],
      trHeight: 30,
      trViewCount: 15
    };
  },
  props: {
    sortBy: {
      default: "occur"
    }
  },
  watch: {
    sortBy: function(val) {
      let that = this;
      that.getCityTrafficRank(val);
    }
  },
  computed: {
    viewHeight() {
      return this.trHeight * this.trViewCount;
    }
  },
  mounted() {
    let that = this;
    let table = document.getElementById("rank-table");
    tableDom = table.getElementsByClassName("ivu-table-body")[0];
    //   TODO调试接口时，需要修改为在回调中调用之后的函数
    that.getCityTrafficRank();
    if (that.tableData.length > that.trViewCount) {
      that.startTimer();
      tableDom.onmouseover = function() {
        clearTimeout(timer);
        timer = null;
      };
      tableDom.onmouseout = function() {
        that.startTimer();
      };
    }
  },
  methods: {
    getCityTrafficRank(sortBy) {
      var that = this;
      getCityTrafficRank(sortBy).then(res => {
        that.tableData = res;
      });
    },
    startTimer() {
      let that = this;
      timer = setTimeout(() => {
        tableDom.scrollTop++;
        if (
          tableDom.scrollTop + tableDom.offsetHeight >=
          that.trHeight * that.tableData.length
        ) {
          var lastTimer = setTimeout(function() {
            tableDom.scrollTop = 0;
            clearTimeout(lastTimer);
            clearTimeout(timer);
            that.startTimer();
          }, 1000);
        } else {
          clearTimeout(timer);
          that.startTimer();
        }
      }, 50);
    }
  }
};
</script>
<style lang="less" scoped>
h3.align-right {
  text-align: right;
}
</style>