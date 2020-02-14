<template>
  <div>
    <h3 class="align-right">出行量排行榜</h3>
    <Table id="rank-table" :height="viewHeight+38" stripe :columns="rankColumns" :data="tableData"></Table>
  </div>
</template>

<script>
let tableDom = null;
let timer = null;
export default {
  data() {
    return {
      rankColumns: [
        {
          type: "index",
          width: 60,
          align: "right"
        },
        {
          title: "省名",
          key: "name",
          width: 70
        },
        {
          title: "发生量",
          key: "age",
          sortable: true
        },
        {
          title: "吸引量",
          key: "address",
          sortable: true
        },
        {
          title: "高铁出行量",
          key: "age",
          sortable: true
        },
        {
          title: "飞机出行量",
          key: "address",
          sortable: true
        }
      ],
      tableData: [],
      trHeight: 30,
      trViewCount: 15
    };
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
    that.getTableData();
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
    getTableData() {
      let fakeData = [
        {
          name: "北京",
          age: 18033,
          address: 23134
        },
        {
          name: "广东",
          age: 24239,
          address: 9767,
          date: "2016-10-01"
        },
        {
          name: "河北",
          age: 30753,
          address: 43433,
          date: "2016-10-02"
        },
        {
          name: "天津",
          age: 2665,
          address: 23123,
          date: "2016-10-04"
        }
      ];

      this.tableData = fakeData
        .concat(fakeData)
        .concat(fakeData)
        .concat(fakeData)
        .concat(fakeData);
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