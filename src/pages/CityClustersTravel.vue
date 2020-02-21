<template>
  <div id="cityClustersTravelPage">
    <main>
      <section>
        <div class="condition">
          <DatePicker
            :open="open"
            :value="currDate"
            type="date"
            size="large"
            @on-change="handleChange"
          >
            <a href="javascript:void(0)" @click="handleClick">
              <Icon type="ios-calendar-outline" size="18" color="#fff"></Icon>
              <span style="font-size: 18px; color: #fff;padding-left: 8px;">{{ currDate }}</span>
            </a>
          </DatePicker>
          <Select v-model="tripMode" style="width:100%; margin-top: 8px;">
            <Option value="air">飞机</Option>
            <Option value="rail">轨道</Option>
            <Option value="road">公路</Option>
          </Select>
        </div>
      </section>
    </main>

    <bg-map class="bg-map"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap";
import moment from "moment";
import "moment/locale/zh-cn";

export default {
  name: "cityClustersTravelPage",
  components: {
    BgMap
  },
  data() {
    return {
      open: false,
      currDate: moment().format("YYYY-MM-DD"),
      tripMode: "road"
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
    handleChange(date) {
      this.open = false;
      this.currDate = date;
    },
    handleOk() {
      this.open = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#cityClustersTravelPage {
  width: 100%;
  height: 100%;
  main {
    padding: 20px;
    height: 84%;
    section {
      width: 16%;
      float: right;
      .condition {
        padding: 16px;
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
}
</style>
<style lang="less">
/* 日期选择器样式 */
#cityClustersTravelPage {
  @btnBackgroundColor: rgba(255, 255, 255, 0.05);
  @boxInsetShadow: rgba(15, 29, 51, 0.5) 0px 4px 5px 0px,
    rgba(75, 204, 236, 0.5) 0px 0px 6px 0px inset;
  @boxBackgroundColor: #101216;
  @fontNormalColor: #fff;
  @fontPrimaryColor: #4bccec;
  @dateCellSize: 50px;

  .bg-map {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .ivu-date-picker .ivu-select-dropdown {
    background-color: @boxBackgroundColor;
    box-shadow: @boxInsetShadow;
    border: 1px solid rgba(75, 204, 236, 0.6);
    /* .ivu-btn {
      margin-left: 10px;
      background: @btnBackgroundColor;
      color: #fff;
      border: none;
      &.ivu-btn-primary {
        color: @fontPrimaryColor;
      }
      &:hover {
        box-shadow: @boxInsetShadow;
        color: @fontPrimaryColor;
      }
    } */
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
}
</style>
