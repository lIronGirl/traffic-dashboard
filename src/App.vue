<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="less">
#app {
  position: relative;
  height: 100%;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
/* 图表标题样式 */
h3 {
  font-size: 18px;
  font-weight: 400;
  text-align: left;
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
</style>
