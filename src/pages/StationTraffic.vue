<template>
  <div id="stationTrafficPage">
    <div class="content">
      <div class="part rank-table">
        <Tabs v-model="stationType" size="small" type="card">
          <TabPane label="火车站" name="rail">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="railColumns"
              :data="railTableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
          <TabPane label="机场" name="air">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="airColumns"
              :data="airTableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
          <TabPane label="高速" name="highway">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="highwayColumns"
              :data="highwayTableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
          <TabPane label="景区" name="scenicspot">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="scenicspotColumns"
              :data="scenicspotTableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
        </Tabs>
      </div>
    </div>

    <bg-map class="bg-map" :mapData="mapData" :mapCenter="mapCenter" :seriesType="seriesType"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap3";
import {
  getRailStationTraffic,
  getAirStationTraffic,
  getHighwayStationTraffic,
  getScenicspotStationTraffic
} from "@/api/index.js";

export default {
  name: "stationTrafficPage",
  components: {
    BgMap
  },
  data() {
    return {
      stationType: "rail",
      railColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "火车站名称",
          key: "station"
        },
        {
          title: "拥堵延时指数/车速",
          key: "index",
          width: 160,
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: { display: "block", padding: "4px 0 0 0" }
                },
                params.row.index
              ),
              h(
                "span",
                {
                  style: { display: "block", padding: "2px 0 4px 0" }
                },
                params.row.speed + "km/h"
              )
            ]);
          }
        }
      ],
      airColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "机场名称",
          key: "station"
        },
        {
          title: "拥堵延时指数/车速",
          key: "index",
          width: 160,
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: { display: "block", padding: "4px 0 0 0" }
                },
                params.row.index
              ),
              h(
                "span",
                {
                  style: { display: "block", padding: "2px 0 4px 0" }
                },
                params.row.speed + "km/h"
              )
            ]);
          }
        }
      ],
      highwayColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "高速名称",
          key: "station"
        },
        {
          title: "拥堵长度/车速",
          key: "index",
          width: 160,
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: { display: "block", padding: "4px 0 0 0" }
                },
                params.row.jamLength + "km"
              ),
              h(
                "span",
                {
                  style: { display: "block", padding: "2px 0 4px 0" }
                },
                params.row.speed + "km/h"
              )
            ]);
          }
        }
      ],
      scenicspotColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "景区名称",
          key: "station"
        },
        {
          title: "拥堵延时指数/周环比",
          key: "index",
          width: 160,
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: { display: "block", padding: "4px 0 0 0" }
                },
                params.row.index
              ),
              h("i", {
                style: { display: "inline-block", padding: "2px 0 4px 0" },
                class:
                  "iconfont " +
                  "icon-" +
                  (params.row.weak2weak.indexOf("-") !== -1
                    ? "down_arrow"
                    : "up_arrow")
              }),
              h(
                "span",
                {
                  style: { display: "inline-block", padding: "2px 0 4px 0" }
                },
                params.row.weak2weak + "%"
              )
            ]);
          }
        }
      ],
      railTableData: [],
      airTableData: [],
      highwayTableData: [],
      scenicspotTableData: [],
      mapData: [],
      mapCenter: 0
    };
  },
  watch: {
    stationType() {
      this.getData();
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let me = this,
        stationType = me.stationType;
      me.seriesType = "scatter";
      switch (stationType) {
        case "rail":
          getRailStationTraffic().then(function(res) {
            me.railTableData = res;
            me.mapData = res.map(function(station) {
              return {
                name: station.station,
                value: station.coords.concat(station.index),
                itemStyle: {
                  normal: {
                    color: me.getLevelColor(station.index)
                  }
                }
              };
            });
          });
          break;
        case "air":
          getAirStationTraffic().then(res => {
            me.airTableData = res;
            me.mapData = res.map(function(station) {
              return {
                name: station.station,
                value: station.coords.concat(station.index),
                itemStyle: {
                  normal: {
                    color: me.getLevelColor(station.index)
                  }
                }
              };
            });
          });
          break;
        case "highway":
          getHighwayStationTraffic().then(res => {
            me.highwayTableData = res;
            me.mapData = res.map(function(station) {
              return {
                name: station.station,
                value: station.coords.concat(station.index),
                itemStyle: {
                  normal: {
                    color: me.getLevelColor(station.index)
                  }
                }
              };
            });
          });
          break;
        case "scenicspot":
          getScenicspotStationTraffic().then(res => {
            me.scenicspotTableData = res;
            me.mapData = res.map(function(station) {
              return {
                name: station.station,
                value: station.coords.concat(station.index),
                itemStyle: {
                  normal: {
                    color: me.getLevelColor(station.index)
                  }
                }
              };
            });
          });
          break;
        default:
          break;
      }
    },
    getLevelColor(level) {
      let color = "";
      if (level > 8) {
        color = "#ec4b4b";
      } else if (level > 6) {
        color = "#eca54b";
      } else if (level > 4) {
        color = "#ece84b";
      } else if (level > 2) {
        color = "#4bccec";
      } else {
        color = "#4bec85";
      }
      return color;
    }
  }
};
</script>

<style lang="less" scoped>
#stationTrafficPage {
  width: 100%;
  height: 100%;
  .content {
    width: 22%;
    height: 100%;
    position: absolute;
    left: 20px;
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
.icon-down_arrow:before {
  color: green;
}

.icon-up_arrow:before {
  color: red;
}
</style>