<template>
  <div>
    <h3 class="align-right">出行量排行榜</h3>
    <Table
      id="rank-table"
      stripe
      :columns="rankColumns"
      :data="tableData.concat(tableData).concat(tableData).concat(tableData)"
    ></Table>
  </div>
</template>

<script>
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
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      tableData: [
        {
          name: "John Brown",
          age: 18,
          address: "222222222",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "1111111",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "43433333",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "2231231",
          date: "2016-10-04"
        }
      ]
    };
  },
  mounted() {
    setTimeout(function() {
      var table = document
        .getElementById("rank-table")
        .getElementsByClassName("ivu-table-body")[0];
      var timer = null;
      function play() {
        clearInterval(timer);
        timer = setInterval(function() {
          table.scrollTop++;
          if (table.scrollTop >= 240 / 2) {
            table.scrollTop = 0;
          }
        }, 100);
      }
      setTimeout(play, 500);
      table.onmouseover = function() {
        clearInterval(timer);
      };
      table.onmouseout = play;
    }, 0);
  }
};
</script>
<style>
#rank-table .ivu-table-body {
  overflow: hidden;
  height: 258px;
}
</style>
<style lang="less" scoped>
h3.align-right {
  text-align: right;
}
</style>