<template>
  <div id="cityClustersTravelPage">
    <div class="content">
      <div class="part">
        <DatePicker
          type="daterange"
          :open="open"
          :value="currDate"
          :options="dateOptions"
          placement="bottom-end"
          @on-change="handleChange"
        >
          <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-calendar-outline" size="18" color="#fff"></Icon>
            <span style="font-size: 18px; color: #fff;padding-left: 8px;">{{displayCurrDate}}</span>
          </a>
        </DatePicker>
        <!--         <RadioGroup v-model="tripMode" type="button">
          <Radio label="passenger">客运</Radio>
          <Radio label="air">飞机</Radio>
          <Radio label="rail">轨道</Radio>
          <Radio label="road">公路</Radio>
        </RadioGroup>-->
      </div>
      <div class="part rank-table">
        <Tabs v-model="rankType" size="small" type="card">
          <TabPane label="客流量" name="tripRank">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="tripColumns"
              :data="triptableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
          <TabPane label="迁入量" name="inRank">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="inColumns"
              :data="intableData"
              @on-row-click="selectInRow"
            ></Table>
          </TabPane>
          <TabPane label="迁出量" name="outRank">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="outColumns"
              :data="outtableData"
              @on-row-click="selectOutRow"
            ></Table>
          </TabPane>
        </Tabs>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="linkageTable" v-if="show">
        <h3>{{ linkageTableTitle }}</h3>
        <Table
          :height="514"
          stripe
          highlight-row
          :columns="rankType === 'inRank' ? inColumns : outColumns"
          :data="rankType === 'inRank' ? inCitysTableData : outCityTableData"
        ></Table>
      </div>
    </transition>
    <bg-map class="bg-map" :mapData="mapData" :mapCenter="mapCenter" :tripMode="tripMode"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap2";
import moment from "moment";
import "moment/locale/zh-cn";
import {
  getCityClustersData,
  getCityData,
  getCityClustersMapdata
} from "@/api/index.js";

export default {
  name: "cityClustersTravelPage",
  components: {
    BgMap
  },
  data() {
    return {
      show: false,
      linkageTableTitle: "",
      open: false,
      currDate: [moment().format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")],
      displayCurrDate: moment().format("YYYY-MM-DD"),
      dateOptions: {
        shortcuts: [
          {
            text: "最近一周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: "最近一个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: "最近三个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          }
        ]
      },
      tripMode: "passenger",
      rankType: "tripRank",
      tripColumns: [
        {
          type: "index",
          width: 58,
          align: "right",
          title: "排行"
        },
        {
          title: "城市",
          key: "city",
          width: 70
        },
        {
          title: "迁入量",
          key: "inVol",
          align: "right",
          width: 90
        },
        {
          title: "与上一日增量",
          key: "inVolIncre",
          align: "right",
          width: 90,
          render: (h, params) => {
            return this.renderArrow(h, params, "inVolIncre");
          }
        },
        {
          title: "迁出量",
          key: "outVol",
          align: "right",
          width: 90
        },
        {
          title: "与上一日增量",
          key: "outVolIncre",
          align: "right",
          width: 90,
          render: (h, params) => {
            return this.renderArrow(h, params, "outVolIncre");
          }
        }
      ],
      inColumns: [
        {
          type: "index",
          width: 58,
          align: "right",
          title: "排行"
        },
        {
          title: "城市",
          key: "city"
        },
        {
          title: "迁入量",
          key: "inVol",
          align: "right"
        },
        {
          title: "与上一日增量",
          key: "inVolIncre",
          align: "right",
          width: 114,
          render: (h, params) => {
            return this.renderArrow(h, params, "inVolIncre");
          }
        }
      ],
      outColumns: [
        {
          type: "index",
          width: 58,
          align: "right",
          title: "排行"
        },
        {
          title: "城市",
          key: "city"
        },
        {
          title: "迁出量",
          key: "outVol",
          align: "right"
        },
        {
          title: "与上一日增量",
          key: "outVolIncre",
          align: "right",
          width: 114,
          render: (h, params) => {
            return this.renderArrow(h, params, "outVolIncre");
          }
        }
      ],
      triptableData: [],
      intableData: [],
      outtableData: [],
      inCitysTableData: [],
      outCityTableData: [],
      mapData: [],
      mapCenter: 0
    };
  },
  watch: {
    currDate(currDate) {
      this.displayCurrDate =
        currDate[0] === currDate[1]
          ? currDate[0]
          : currDate[0] + " 至 " + currDate[1];
      this.getData();
    },
    tripMode() {
      this.getData();
    },
    rankType() {
      this.show = this.rankType !== "tripRank";
      this.getData();
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    renderArrow(h, params, key) {
      let val = params.row[key];
      let isIncrem = +val.slice(0, -1) > 0;
      return h("div", [
        h(
          "span",
          {
            style: { padding: "4px 0 0 0" }
          },
          val
        ),
        h("i", {
          style: {
            color: isIncrem ? "#ec4b4b" : "#4bec85",
            padding: "2px 0 4px 0"
          },
          class: "iconfont icon-" + (isIncrem ? "up" : "down") + "_arrow"
        })
      ]);
    },
    handleClick() {
      this.open = !this.open;
    },
    handleChange(date) {
      this.open = false;
      this.currDate = date;
    },
    selectRow(row) {
      this.mapCenter = row.city;
    },
    selectInRow(row) {
      this.getCityData(row.city, "in");
      this.linkageTableTitle = row.city + "迁入量排行";
    },
    selectOutRow(row) {
      this.getCityData(row.city, "out");
      this.linkageTableTitle = row.city + "迁出量排行";
    },
    getData() {
      let that = this;
      getCityClustersData({
        dataRange: that.currDate,
        tripMode: that.tripMode,
        rankType: that.rankType
      }).then(res => {
        if (res[0]) {
          res[0]._highlight = true;
        }
        switch (that.rankType) {
          case "tripRank":
            that.triptableData = res;
            res[0] && that.selectRow(res[0]);
            getCityClustersMapdata().then(mapRes => {
              that.mapData = mapRes;
              that.mapCenter = res[0].city;
            });
            break;
          case "inRank":
            that.intableData = res;
            res[0] && that.selectInRow(res[0]);
            break;
          case "outRank":
            that.outtableData = res.sort(function(a, b) {
              return +b.outVol - +a.outVol;
            });
            res[0] && that.selectOutRow(that.outtableData[0]);
            break;
          default:
            break;
        }
      });
    },
    getCityData(city, inOrOut) {
      let that = this;
      getCityData({ city: city, inOrOut: inOrOut }).then(res => {
        that[inOrOut === "in" ? "inCitysTableData" : "outCityTableData"] = res;
        if (res.length > 0) {
          that.mapData = res.map(function(data) {
            return inOrOut === "in"
              ? [data.city, city, data.inVol]
              : [city, data.city, data.outVol];
          });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#cityClustersTravelPage {
  width: 100%;
  height: 100%;
  .content {
    width: 31%;
    height: 100%;
    position: absolute;
    right: 20px;
    z-index: 2;
    .part {
      padding: 16px;
      margin-bottom: 16px;
      background-color: rgba(255, 255, 255, 0.05);
      & .ivu-date-picker {
        width: 100%;
      }
      &.rank-table {
        height: 80%;
      }
      .ivu-radio-group-button .ivu-radio-wrapper {
        background-color: rgba(255, 255, 255, 0.05);
        color: #fff;
        border-color: #dcdee2ba;
        margin-top: 20px;
      }
      .ivu-radio-group-button .ivu-radio-wrapper-checked {
        border-color: #4bccec;
      }
    }
  }
  .linkageTable {
    width: 20%;
    height: 80%;
    position: absolute;
    left: 20px;
    top: 240px;
    z-index: 2;
  }
}
</style>