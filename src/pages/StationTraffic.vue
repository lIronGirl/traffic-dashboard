<template>
  <div id="stationTrafficPage">
    <div class="content">
      <div class="part rank-table">
        <Tabs v-model="stationType" size="small" type="card">
          <TabPane label="火车站" name="rail">
            <Table :height="514" stripe highlight-row :columns="tableColumns" :data="tableData"></Table>
          </TabPane>
          <TabPane label="机场" name="air">
            <Table :height="514" stripe highlight-row :columns="tableColumns" :data="tableData"></Table>
          </TabPane>
          <TabPane label="高速" name="highway">
            <Table :height="514" stripe highlight-row :columns="tableColumns" :data="tableData"></Table>
          </TabPane>
          <TabPane label="景区" name="scenicspot">
            <Table :height="514" stripe highlight-row :columns="tableColumns" :data="tableData"></Table>
          </TabPane>
        </Tabs>
      </div>
    </div>

    <bg-map class="bg-map" :mapData="mapData" :mapCenter="mapCenter" :seriesType="seriesType"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap3";
import { getStationTraffic } from "@/api/index.js";

export default {
  name: "stationTrafficPage",
  components: {
    BgMap
  },
  data() {
    return {
      stationType: "rail",
      tableColumns: [
        {
          type: "index",
          width: 60,
          align: "right",
          title: "排行"
        },
        {
          title: "枢纽名称",
          key: "hubName"
        },
        {
          title: "枢纽承载力",
          key: "bearingCapacity"
        },
        {
          title: "客流量",
          key: "passengerVolume"
        },
        {
          title: "疏解效率",
          key: "relievingEfficiency"
        }
      ],
      tableData: [],
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
      let me = this;
      let stationType = me.stationType;
      me.seriesType = "scatter";
      getStationTraffic(stationType).then(function(res) {
        me.tableData = res;
        me.mapData = res.map(function(station) {
          return {
            name: station.hubName,
            value: station.coords.concat(station.passengerVolume)
          };
        });
      });
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