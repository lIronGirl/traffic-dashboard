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
    },
    tripMode: {
      default: "rail"
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
        citys = [
          geoCoordMap[mapData[val][0].name],
          geoCoordMap[mapData[val][1].name]
        ];

        that.setFitView(citys);
      } else {
        return;
      }
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
      // 基于准备好的dom，初始化echarts实例
      that.myChart =
        that.myChart || this.$echarts.init(document.getElementById("map2-dom"));
      let baseOpt = {
        tooltip: {
          trigger: "item"
        },
        bmap: {
          //   center: [110.114129, 42.550339],
          roam: true,
          mapStyle: {
            styleJson: mapStyle1
          }
        }
      };
      let citys = [],
        data = [];

      if (that.tripMode === "air") {
        citys = that.getCitysCoords(that.mapData);
        data = that.convertLinesData(that.mapData);
      } else {
        data = that.mapData;
      }

      let option = {
        series:
          that.tripMode === "air"
            ? that.getAirSeries(data, citys)
            : that.getRouteSeries(data)
      };

      that.myChart.clear();
      that.myChart.setOption({ ...baseOpt, ...option }, { notMerge: true });
      that.myMap = that.myChart
        .getModel()
        .getComponent("bmap")
        .getBMap();

      that.setFitView(
        that.tripMode === "air"
          ? that.mapCenter !== -1
            ? [
                geoCoordMap[that.mapData[0][0].name],
                geoCoordMap[that.mapData[0][1].name]
              ]
            : citys
          : data[0].coords
      );
    },
    getAirSeries(data, citys) {
      let planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      return [
        {
          type: "lines",
          coordinateSystem: "bmap",
          zlevel: 1,
          effect: {
            show: true,
            constantSpeed: 80,
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
            constantSpeed: 80,
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
              name: dataItem[2],
              value: dataItem.slice(0, 2).concat([50])
            };
          })
        }
      ];
    },
    getRouteSeries(data) {
      return [
        {
          type: "lines",
          coordinateSystem: "bmap",
          polyline: true,
          zlevel: 1,
          effect: {
            constantSpeed: 50,
            show: true,
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
          data: data,
          polyline: true,
          lineStyle: {
            color: "#4bccec",
            opacity: 0.6,
            width: 1,
            curveness: 0.2
          }
        }
      ];
    },
    setFitView(citysCoords) {
      let points = [];
      for (let i = 0; i < citysCoords.length; i++) {
        const coords = citysCoords[i];
        /* global BMap*/
        points.push(new BMap.Point(coords[0], coords[1]));
      }
      this.myMap.setViewport(points, {
        margins: [100, 310, 20, 20]
      });
    },
    convertLinesData(data) {
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
    },
    getCitysCoords(data) {
      var mRst = {},
        i,
        len = data.length;
      for (i = 0; i < len; i++) {
        var dataItem = data[i],
          fromCity = dataItem[0].name,
          toCity = dataItem[1].name;
        mRst[fromCity] =
          mRst[fromCity] || geoCoordMap[fromCity].concat(fromCity);
        mRst[toCity] = mRst[toCity] || geoCoordMap[toCity].concat(toCity);
      }

      return Object.values(mRst);
    }
  }
};
</script>

<style>
</style>
