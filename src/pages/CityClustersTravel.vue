<template>
  <div id="cityClustersTravelPage">
    <div class="content">
      <div class="part">
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
      <div class="part rank-table">
        <Tabs v-model="rankType" size="small" type="card">
          <TabPane label="出行" name="tripRank">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="tripColumns"
              :data="tableData"
              @on-row-click="seleckRow"
            ></Table>
          </TabPane>
          <TabPane label="迁入" name="inRank">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="outOrInColumns"
              :data="tableData"
              @on-row-click="seleckInRow"
            ></Table>
          </TabPane>
          <TabPane label="迁出" name="outRank">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="outOrInColumns"
              :data="tableData"
              @on-row-click="seleckOutRow"
            ></Table>
          </TabPane>
        </Tabs>
      </div>
    </div>

    <bg-map class="bg-map" :mapData="mapData" :mapCenter="mapCenter"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap2";
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
      tripMode: "air",
      rankType: "tripRank",
      tripColumns: [
        {
          title: "排行",
          key: "name",
          tooltip: true
        },
        {
          title: "指数",
          key: "index"
        },
        {
          title: "时长",
          key: "time"
        }
      ],
      outOrInColumns: [
        {
          title: "排行",
          key: "name"
        },
        {
          title: "指数",
          key: "index"
        }
      ],
      tableData: [],
      mapData: [],
      mapCenter: 0
    };
  },
  watch: {
    currDate() {
      this.getData();
    },
    tripMode() {
      this.getData();
    },
    rankType(val) {
      this.mapCenter = val === "tripRank" ? 0 : -1;
      this.getData();
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
    handleChange(date) {
      this.open = false;
      this.currDate = date;
    },
    seleckRow(row, index) {
      this.mapCenter = index;
    },
    seleckInRow(row) {
      this.mapData = this.getInCityData(row.name);
    },
    seleckOutRow(row) {
      this.mapData = this.getOutCityData(row.name);
    },
    getData() {
      // 飞机使用线图，轨道及公路使用路径图
      let that = this;
      /* that.currDate;
      that.tripMode;
      that.rankType; */
      // alert(that.currDate + "-" + that.tripMode + "-" + that.rankType);
      let fakeData1 = [
        [
          {
            name: "北京"
          },
          {
            name: "廊坊",
            index: 38,
            time: 58
          }
        ],
        [
          {
            name: "廊坊"
          },
          {
            name: "北京",
            index: 36,
            time: 50
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "石家庄",
            index: 30,
            time: 300
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "天津",
            index: 30,
            time: 120
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "唐山",
            index: 28,
            time: 240
          }
        ],
        [
          {
            name: "石家庄"
          },
          {
            name: "北京",
            index: 27,
            time: 360
          }
        ],
        [
          {
            name: "石家庄"
          },
          {
            name: "天津",
            index: 25,
            time: 120
          }
        ],
        [
          {
            name: "天津"
          },
          {
            name: "北京",
            index: 25,
            time: 120
          }
        ],
        [
          {
            name: "石家庄"
          },
          {
            name: "唐山",
            index: 23,
            time: 260
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "唐山",
            index: 10,
            time: 300
          }
        ]
      ];
      let fakeData2 = [
        {
          name: "北京",
          index: 80
        },
        {
          name: "天津",
          index: 76
        },
        {
          name: "石家庄",
          index: 60
        },
        {
          name: "廊坊",
          index: 54
        },
        {
          name: "唐山",
          index: 46
        }
      ];
      let fakeData3 = [
        {
          name: "北京",
          index: 79
        },
        {
          name: "廊坊",
          index: 76
        },
        {
          name: "天津",
          index: 60
        },
        {
          name: "石家庄",
          index: 54
        },
        {
          name: "唐山",
          index: 46
        }
      ];

      if (that.rankType === "tripRank" && that.tripMode === "air") {
        that.tableData = fakeData1.map(function(val) {
          return {
            name: val[0].name + "-" + val[1].name,
            index: val[1].index,
            time: val[1].time
          };
        });
        that.mapData = fakeData1;
      } else if (that.rankType === "inRank" && that.tripMode === "air") {
        that.tableData = fakeData2;
        that.mapData = that.getInCityData(fakeData2[0].name);
      } else if (that.rankType === "outRank" && that.tripMode === "air") {
        that.tableData = fakeData3;
        that.mapData = that.getOutCityData(fakeData3[0].name);
      }

      that.tableData[0] && (that.tableData[0]._highlight = true);
    },
    getInCityData(city) {
      let fakeData = [
        { name: "廊坊" },
        { name: "北京" },
        { name: "天津" },
        { name: "石家庄" },
        { name: "邢台" },
        { name: "唐山" },
        { name: "邯郸" },
        { name: "沧州" },
        { name: "衡水" }
      ].filter(function(val) {
        return val.name !== city;
      });

      if (this.tripMode === "air") {
        return fakeData.map(function(val) {
          return [val, { name: city }];
        });
      }
    },
    getOutCityData(city) {
      let fakeData = [
        { name: "廊坊" },
        { name: "北京" },
        { name: "天津" },
        { name: "石家庄" },
        { name: "邢台" },
        { name: "唐山" },
        { name: "邯郸" },
        { name: "沧州" },
        { name: "衡水" }
      ].filter(function(val) {
        return val.name !== city;
      });

      if (this.tripMode === "air") {
        return fakeData.map(function(val) {
          return [{ name: city }, val];
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#cityClustersTravelPage {
  width: 100%;
  height: 100%;
  .content {
    width: 20%;
    height: 100%;
    position: absolute;
    right: 20px;
    z-index: 2;
    .part {
      padding: 16px;
      margin-bottom: 16px;
      background-color: rgba(255, 255, 255, 0.05);
      &.rank-table {
        height: 80%;
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
