<template>
  <div id="map2-dom"></div>
</template>

<script>
import { mapStyle1 } from "../assets/mapStyle.js";
import geoCoordMap from "../assets/geoCoordMap";
import "echarts/extension/bmap/bmap";

export default {
  name: "myMap2",
  data() {
    return {
      myChart: null,
      myMap: null
    };
  },
  props: {
    mapData: {
      type: Array
    },
    mapCenter: {
      default: 0
    }
  },
  watch: {
    mapData() {
      this.drawMap();
    },
    mapCenter(val) {
      let that = this,
        mapData = that.mapData;
      that.setFitView([mapData[val][0].name, mapData[val][1].name]);
    }
  },
  mounted() {
    // this.drawMap();
  },
  methods: {
    drawMap() {
      var that = this;

      /* var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      }; */
      var convertLinesData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push([
              {
                coord: fromCoord
              },
              {
                coord: toCoord
              }
            ]);
          }
        }
        return res;
      };
      var getCitys = function(data) {
        var res = [],
          i,
          len = data.length;
        for (i = 0; i < len; i++) {
          var dataItem = data[i];
          res.push(dataItem[0].name, dataItem[1].name);
        }

        var mRst = new Map();
        return res.filter(a => !mRst.has(a) && mRst.set(a, 1));
      };

      let data = convertLinesData(that.mapData);

      // 基于准备好的dom，初始化echarts实例
      that.myChart =
        that.myChart || this.$echarts.init(document.getElementById("map2-dom"));
      let baseOpt = {
        tooltip: {
          trigger: "item"
        },
        bmap: {
          center: [110.114129, 42.550339],
          roam: true,
          mapStyle: {
            styleJson: mapStyle1
          }
        }
      };

      let option = {
        series: [
          {
            type: "lines",
            coordinateSystem: "bmap",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "#fff",
              symbol: "arrow",
              symbolSize: 5
            },
            lineStyle: {
              normal: {
                color: "#4bccec",
                width: 1,
                opacity: 0.2,
                curveness: 0.2
              }
            },
            data: data
          },
          {
            type: "effectScatter",
            coordinateSystem: "bmap",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}"
              }
            },
            symbolSize: function(val) {
              return val[2] / 4;
            },
            showEffectOn: "render",
            itemStyle: {
              normal: {
                color: "#4bccec"
              }
            },
            data: getCitys(that.mapData).map(function(dataItem) {
              return {
                name: dataItem,
                value: geoCoordMap[dataItem].concat([50])
              };
            })
          }
        ]
      };

      that.myChart.clear();
      that.myChart.setOption({ ...baseOpt, ...option }, { notMerge: true });
      that.myMap = that.myChart
        .getModel()
        .getComponent("bmap")
        .getBMap();
      that.mapData[0] &&
        that.setFitView([that.mapData[0][0].name, that.mapData[0][1].name]);
    },
    setFitView(citys) {
      let points = [];
      for (let i = 0; i < citys.length; i++) {
        const city = citys[i];
        /* global BMap*/
        points.push(new BMap.Point(geoCoordMap[city][0], geoCoordMap[city][1]));
      }
      this.myMap.setViewport(points, {
        margins: [100, 310, 20, 20]
      });
    }
  }
};
</script>

<style>
</style>
