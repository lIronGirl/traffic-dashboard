<template>
  <div id="app">
    <router-view></router-view>
    <!-- <home></home>
    <city-clusters-travel></city-clusters-travel> -->
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
// import CityClustersTravel from "./components/CityClustersTravel"

export default {
  name: "app",
  components: {
    // Home,
    // CityClustersTravel
  },
  mounted() {
    /* let winWidth = document.documentElement.clientWidth;
    document.getElementById('app').style.transform = 'scale('+ winWidth/1920+','+ winWidth/1920 +')' */
  }
};
</script>

<style lang="less">
#app {
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: white;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* 图表标题样式 */
  h3 {
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 14px;
  }
  h3.align-right {
    text-align: right;
  }
  /* 表格样式 */
  table {
    font-size: 14px;
    border-collapse: collapse;
    td {
      height: 30px;
    }
    thead {
      font-weight: 500;
    }
    tbody {
      tr:nth-child(odd) {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
  /* iView表格样式重写 */
  .ivu-table {
    background-color: transparent;
    color: #fff;
    th,
    td {
      background-color: transparent;
      border-bottom: none;
    }
    &.ivu-table-stripe .ivu-table-body tr:nth-child(2n) td,
    &.ivu-table-stripe .ivu-table-fixed-body tr:nth-child(2n) td {
      background-color: transparent;
    }
    &:before {
      height: 0;
    }
  }

  /* 隐藏百度地图版权信息 */
  .anchorBL {
    display: none;
  }
}
</style>
