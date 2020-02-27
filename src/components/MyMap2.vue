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
        mapData = that.mapData,
        citys = [];
      if (val !== -1) {
        citys = [mapData[val][0].name, mapData[val][1].name];
      } else {
        citys = that.getCitys(mapData);
      }
      that.setFitView(citys);
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
      let citys = that.getCitys(that.mapData);

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
      let planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

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
              symbolSize: 3
            },
            lineStyle: {
              normal: {
                width: 0,
                curveness: 0.2
              }
            },
            data: data
          },
          {
            type: "lines",
            coordinateSystem: "bmap",
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              color: "#4bccec",
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: "#4bccec",
                width: 1,
                opacity: 0.6,
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
            data: citys.map(function(dataItem) {
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
        that.setFitView(
          that.mapCenter !== -1
            ? [that.mapData[0][0].name, that.mapData[0][1].name]
            : citys
        );
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
    },
    getCitys(data) {
      var res = [],
        i,
        len = data.length;
      for (i = 0; i < len; i++) {
        var dataItem = data[i];
        res.push(dataItem[0].name, dataItem[1].name);
      }

      var mRst = new Map();
      return res.filter(a => !mRst.has(a) && mRst.set(a, 1));
    }
  }
};
</script>

<style>
</style>
