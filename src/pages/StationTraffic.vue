<template>
  <div id="stationTrafficPage">
    <div class="content">
      <div class="part rank-table">
        <Tabs v-model="direction" size="small" type="card">
          <TabPane label="客流量" name="all">
            <Table :height="614" stripe highlight-row :columns="tableColumns1" :data="tableData1"></Table>
          </TabPane>
          <TabPane label="产生量" name="out">
            <Table
              :height="614"
              stripe
              highlight-row
              :columns="tableColumns2"
              :data="tableData2"
              @on-row-click="selectOutRow"
            ></Table>
          </TabPane>
          <TabPane label="吸引量" name="in">
            <Table
              :height="614"
              stripe
              highlight-row
              :columns="tableColumns3"
              :data="tableData3"
              @on-row-click="selectInRow"
            ></Table>
          </TabPane>
        </Tabs>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="linkageTable" v-if="direction !== 'all'">
        <h3>{{ linkageTableTitle }}</h3>
        <Table
          :height="614"
          stripe
          highlight-row
          :columns="direction === 'out' ? tableColumns4 : tableColumns5"
          :data="direction === 'out' ? tableData4 : tableData5"
        ></Table>
      </div>
    </transition>
    <bg-map class="bg-map" :mapData="mapData" :mapCenter="mapCenter" :tripMode="direction"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap2";
import {
  getStationTraffic,
  getStationTrafficMapdata,
  getHubData
} from "@/api/index.js";

export default {
  name: "stationTrafficPage",
  components: {
    BgMap
  },
  data() {
    return {
      linkageTableTitle: "",
      direction: "all",
      tableColumns1: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "枢纽名称",
          key: "hub",
          width: 120
        },
        {
          title: "客流量",
          key: "all",
          align: "right"
        },
        {
          title: "产生量",
          key: "out",
          align: "right"
        },
        {
          title: "吸引量",
          key: "in",
          align: "right"
        }
      ],
      tableColumns2: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "枢纽名称",
          key: "hub",
          width: 120
        },
        {
          title: "产生量",
          key: "out",
          align: "right"
        },
        {
          title: "与上一日增量",
          key: "inc",
          align: "right",
          render: (h, params) => {
            return this.renderArrow(h, params, "inc");
          }
        }
      ],
      tableColumns3: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "枢纽名称",
          key: "hub",
          width: 120
        },
        {
          title: "吸引量",
          key: "in",
          align: "right"
        },
        {
          title: "与上一日增量",
          key: "inc",
          align: "right",
          render: (h, params) => {
            return this.renderArrow(h, params, "inc");
          }
        }
      ],
      tableColumns4: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "枢纽名称",
          key: "hub",
          width: 120
        },
        {
          title: "产生量",
          key: "out",
          align: "right"
        }
      ],
      tableColumns5: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "枢纽名称",
          key: "hub",
          width: 120
        },
        {
          title: "吸引量",
          key: "in",
          align: "right"
        }
      ],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      mapData: [],
      mapCenter: 0
    };
  },
  watch: {
    direction() {
      this.getData();
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let that = this;
      const direction = that.direction;
      // me.seriesType = "scatter";
      getStationTraffic(direction).then(function(res) {
        if (res[0]) {
          res[0]._highlight = true;
        }
        switch (direction) {
          case "all":
            that.tableData1 = res;
            res[0] && that.selectRow(res[0]);
            getStationTrafficMapdata().then(mapRes => {
              that.mapData = mapRes;
              that.mapCenter = res[0].hub;
            });
            break;
          case "out":
            that.tableData2 = res;
            res[0] && that.selectOutRow(res[0]);
            break;
          case "in":
            that.tableData3 = res;
            res[0] && that.selectInRow(res[0]);
            break;
          default:
            break;
        }
      });
    },
    getHubData(hub, inOrOut) {
      let that = this;
      getHubData({ hub: hub, inOrOut: inOrOut }).then(res => {
        let key = inOrOut === "in" ? "in" : "out";
        let datas = res.sort(function(a, b) {
          return +b[key] - +a[key];
        });
        that[inOrOut === "in" ? "tableData5" : "tableData4"] = datas;
        if (datas.length > 0) {
          that.mapData = datas.map(function(data) {
            return inOrOut === "in"
              ? [data.hub, hub, data.in]
              : [hub, data.hub, data.out];
          });
        }
      });
    },
    selectRow(row) {
      this.mapCenter = row.hub;
    },
    selectInRow(row) {
      this.getHubData(row.hub, "in");
      this.linkageTableTitle = row.hub + "吸引量排行";
    },
    selectOutRow(row) {
      this.getHubData(row.hub, "out");
      this.linkageTableTitle = row.hub + "产生量排行";
    },
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
    }
  }
};
</script>

<style lang="less" scoped>
#stationTrafficPage {
  width: 100%;
  height: 100%;
  .content {
    width: 28%;
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
  .linkageTable {
    width: 20%;
    height: 80%;
    position: absolute;
    left: 20px;
    top: 140px;
    z-index: 2;
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