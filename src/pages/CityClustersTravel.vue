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
              :data="triptableData"
              @on-row-click="selectRow"
            ></Table>
          </TabPane>
          <TabPane label="迁入" name="inRank">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="outOrInColumns"
              :data="intableData"
              @on-row-click="selectInRow"
            ></Table>
          </TabPane>
          <TabPane label="迁出" name="outRank">
            <Table
              :height="514"
              stripe
              highlight-row
              :columns="outOrInColumns"
              :data="outtableData"
              @on-row-click="selectOutRow"
            ></Table>
          </TabPane>
        </Tabs>
      </div>
    </div>

    <bg-map class="bg-map" :mapData="mapData" :mapCenter="mapCenter" :tripMode="tripMode"></bg-map>
  </div>
</template>

<script>
import BgMap from "../components/MyMap2";
import moment from "moment";
import "moment/locale/zh-cn";
import { getTripViaAirRankList, getTripViaRailRankList } from "@/api/index.js";

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
      triptableData: [],
      intableData: [],
      outtableData: [],
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
    rankType() {
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
    selectRow(row, index) {
      this.mapCenter = index;
    },
    selectInRow(row) {
      this.mapData = this.getInCityData(row.name);
    },
    selectOutRow(row) {
      this.mapData = this.getOutCityData(row.name);
    },
    getData() {
      // 飞机使用线图，轨道及公路使用路径图
      let that = this;
      /* that.currDate;
      that.tripMode;
      that.rankType; */
      // alert(that.currDate + "-" + that.tripMode + "-" + that.rankType);
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

      if (that.rankType === "tripRank") {
        if (that.tripMode === "air") {
          getTripViaAirRankList(that.currDate).then(res => {
            that.triptableData = res.map(function(val) {
              return {
                name: val[0].name + "-" + val[1].name,
                index: val[1].index,
                time: val[1].time
              };
            });
            that.triptableData[0] && (that.triptableData[0]._highlight = true);
            that.mapData = res;
          });
        } else if (that.tripMode === "rail") {
          getTripViaRailRankList(that.currDate).then(res => {
            that.triptableData = res.map(function(val) {
              return {
                name: val[0].name + "-" + val[1].name,
                index: val[1].index,
                time: val[1].time
              };
            });
            that.triptableData[0] && (that.triptableData[0]._highlight = true);

            that.mapData = that.getRailData(res[0][0].name, res[0][1].name);
          });
        } else {
          /* that.mapData = that.getRoadData(
            fakeData1[0][0].name,
            fakeData1[0][1].name
          ); */
        }
      } else if (that.rankType === "inRank" && that.tripMode === "air") {
        that.intableData = fakeData2;
        that.intableData[0] && (that.intableData[0]._highlight = true);
        that.mapData = that.getInCityData(fakeData2[0].name);
      } else if (that.rankType === "outRank" && that.tripMode === "air") {
        that.outtableData = fakeData3;
        that.outtableData[0] && (that.outtableData[0]._highlight = true);
        that.mapData = that.getOutCityData(fakeData3[0].name);
      }

      that.mapCenter = that.rankType === "tripRank" ? 0 : -1;
    },
    getRailData(fromCity, toCity) {
      // let that = this;
      if (fromCity === "北京" && toCity === "石家庄") {
        return [
          {
            coords: [
              [116.328103, 39.900835],
              [114.490825, 38.016821]
            ]
          },
          {
            coords: [
              [116.328103, 39.900835],
              [115.607409, 38.869587],
              [114.490825, 38.016821]
            ]
          },
          {
            coords: [
              [116.328103, 39.900835],
              [115.952311, 39.295036],
              [114.490825, 38.016821]
            ]
          }
        ];
      }
    },
    /* getRoadData(fromCity, toCity) {
      let that =
      if (fromCity === "北京" && toCity === "石家庄") {
        that.mapData = [
          {
            coords: [
              [116.328103, 39.900835],
              [114.490825, 38.016821]
            ]
          },
          {
            coords: [
              [116.328103, 39.900835],
              [115.607409, 38.869587],
              [114.490825, 38.016821]
            ]
          },
          {
            coords: [
              [116.328103, 39.900835],
              [115.952311, 39.295036],
              [114.490825, 38.016821]
            ]
          }
        ];
      }
    }, */
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
    width: 22%;
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