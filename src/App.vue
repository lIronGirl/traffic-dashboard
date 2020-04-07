<template>
  <div id="app">
    <home-header class="home-header"></home-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
export default {
  name: "app",
  components: {
    HomeHeader
  }
};
</script>

<style lang="less">
@import url("./assets/icon/iconfont.css");
/* Base */
/* 清除浮动 */
.clearfix:after {
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  content: ".";
}
.clearfix {
  zoom: 1;
}
#app {
  margin: 0;
  padding: 0;
  font-size: 14px;
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
    .ivu-table-row-highlight td {
      color: #4bccec;
    }
    &:before {
      height: 0;
    }
    .ivu-table-cell {
      padding-left: 14px;
      padding-right: 14px;
    }
  }

  /* 隐藏百度地图版权信息 */
  .anchorBL {
    display: none;
  }

  @btnBackgroundColor: rgba(255, 255, 255, 0.05);
  @boxInsetShadow: rgba(15, 29, 51, 0.5) 0px 4px 5px 0px,
    rgba(75, 204, 236, 0.5) 0px 0px 6px 0px inset;
  @boxBackgroundColor: #181c21;
  @fontNormalColor: #fff;
  @fontPrimaryColor: #4bccec;
  @dateCellSize: 50px;

  .bg-map {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  /* datepicker 样式 */
  .ivu-date-picker .ivu-select-dropdown {
    background-color: @boxBackgroundColor;
    box-shadow: @boxInsetShadow;
    border: 1px solid rgba(75, 204, 236, 0.6);
    .ivu-date-picker-header,
    .ivu-picker-confirm {
      border: none;
    }
    .ivu-date-picker-cells {
      width: 378px;
      margin: 0;
      .ivu-date-picker-cells-header span {
        line-height: @dateCellSize;
        margin: 0;
        width: @dateCellSize;
        height: @dateCellSize;
      }
      span.ivu-date-picker-cells-cell {
        width: @dateCellSize;
        height: @dateCellSize;
      }
      span em {
        width: @dateCellSize;
        height: @dateCellSize;
        line-height: @dateCellSize;
        margin: 0;
      }
    }
    .ivu-date-picker-cells-year .ivu-date-picker-cells-cell-focused,
    .ivu-date-picker-cells-month .ivu-date-picker-cells-cell-focused,
    .ivu-date-picker-cells-cell:hover em,
    .ivu-date-picker-cells-cell-selected em,
    .ivu-date-picker-cells-cell-selected:hover em {
      color: @fontPrimaryColor;
      background-color: transparent;
    }
    .ivu-date-picker-cells-year .ivu-date-picker-cells-cell-focused,
    .ivu-date-picker-cells-month .ivu-date-picker-cells-cell-focused {
      border: 1px solid @fontPrimaryColor;
    }
  }

  /* dropdown样式 */
  .ivu-select {
    .ivu-select-selection,
    .ivu-select-dropdown {
      background-color: @boxBackgroundColor;
      border: none;
      color: @fontNormalColor;
    }
    .ivu-select-item {
      color: @fontNormalColor;
    }
    .ivu-select-item-selected,
    .ivu-select-item-selected:hover {
      color: @fontPrimaryColor;
    }
    .ivu-select-item:hover {
      background: rgba(243, 243, 243, 0.08);
    }
    .ivu-select-item-focus {
      background-color: transparent;
    }
  }
  /* tab样式 */
  .ivu-tabs.ivu-tabs-card {
    color: @fontNormalColor;
    & > .ivu-tabs-bar {
      border: none;
      margin-bottom: 0;
      .ivu-tabs-tab {
        background-color: transparent;
        border-color: transparent;
      }
      .ivu-tabs-tab-active {
        background-color: @boxBackgroundColor;
        border-color: transparent;
        border: none;
      }
    }
    .ivu-tabs-content {
      & > div {
        background: @boxBackgroundColor;
      }
    }
  }
}
</style>
