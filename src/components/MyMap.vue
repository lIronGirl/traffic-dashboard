<template>
  <div id="map-dom"></div>
</template>

<script>
import { mapStyle1 } from "../assets/mapStyle.js";
import geoCoordMap from "../assets/geoCoordMap";
import "echarts/extension/bmap/bmap";
import {
  getOccurrenceQuantity,
  getAttractionQuantity,
  getRailQuantity,
  getAirQuantity
} from "@/api/index.js";

const mapType = {
  occur: {
    data: "getOccurrenceQuantity",
    series: "scatter",
    color: "#4bccec"
  },
  attr: {
    data: "getAttractionQuantity",
    series: "scatter",
    color: "#a680ff"
  },
  rail: {
    data: "getRailQuantity",
    series: "lines",
    color: "#4bccec"
  },
  air: {
    data: "getAirQuantity",
    series: "lines",
    color: "#a680ff"
  }
};

export default {
  name: "myMap",
  data() {
    return {
      mapData: [],
      myChart: null
    };
  },
  props: {
    indicator: {
      default: "occur"
    }
  },
  watch: {
    indicator: function(val) {
      let that = this;
      that[mapType[val].data]();
    }
  },
  mounted() {
    let that = this;
    that[mapType[that.indicator].data]();
  },
  methods: {
    drawMap() {
      var that = this;

      var convertData = function(data) {
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
      };
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

      let seriesColor = mapType[that.indicator].color;
      let seriesType = mapType[that.indicator].series;

      let levelColors = ["#ec4b4b", "#eca54b", "#ece84b", "#4bec85"];
      // 基于准备好的dom，初始化echarts实例
      that.myChart =
        that.myChart || this.$echarts.init(document.getElementById("map-dom"));
      let baseOpt = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c}"
        },
        bmap: {
          center: [110.114129, 42.550339],
          zoom: 5,
          roam: false,
          mapStyle: {
            styleJson: mapStyle1
          }
        }
      };

      let option =
        seriesType === "scatter"
          ? {
              visualMap: {
                min: 0,
                max: 300,
                calculable: true,
                color: levelColors,
                textStyle: {
                  color: "#fff"
                },
                right: "30%"
              },
              series: [
                {
                  type: "scatter",
                  animation: false,
                  coordinateSystem: "bmap",
                  data: convertData(that.mapData),
                  symbolSize: function(val) {
                    return val[2] / 10;
                  },
                  label: {
                    formatter: "{b}",
                    position: "right",
                    show: false
                  },
                  itemStyle: {
                    color: seriesColor
                  },
                  emphasis: {
                    label: {
                      show: true
                    }
                  }
                },
                {
                  name: "Top 5",
                  type: "effectScatter",
                  animation: false,
                  coordinateSystem: "bmap",
                  data: convertData(
                    that.mapData
                      .sort(function(a, b) {
                        return b.value - a.value;
                      })
                      .slice(0, 5)
                  ),
                  symbolSize: function(val) {
                    return val[2] / 10;
                  },
                  showEffectOn: "render",
                  rippleEffect: {
                    brushType: "stroke",
                    scale: 2
                  },
                  label: {
                    formatter: "{b}",
                    position: "right",
                    show: true
                  },
                  itemStyle: {
                    color: levelColors[0],
                    shadowBlur: 10,
                    shadowColor: "#333"
                  },
                  zlevel: 1
                }
              ]
            }
          : {
              series: [
                /* {
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
                      color: color[i]
                    }
                  },
                  data: [
                    {
                      name: item[0],
                      value: geoCoordMap[item[0]].concat([100])
                    }
                  ]
                }, */
                {
                  type: "lines",
                  animation: false,
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
                      color: seriesColor,
                      width: 1,
                      opacity: 0.2,
                      curveness: 0.2
                    }
                  },
                  data: convertLinesData(that.mapData)
                },
                {
                  type: "effectScatter",
                  animation: false,
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
                      color: seriesColor
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
      /* var map = myChart1.getModel().getComponent('bmap').getBMap();
      map.setMapStyleV2(mapStyle1); */
    },
    getOccurrenceQuantity() {
      var that = this;
      getOccurrenceQuantity().then(res => {
        that.mapData = res;
        that.drawMap();
      });
    },
    getAttractionQuantity() {
      var that = this;
      getAttractionQuantity().then(res => {
        that.mapData = res;
        that.drawMap();
      });
    },
    getRailQuantity() {
      // TODO 是否需要区分点的大小，如果需要区分，怎么知道每个点的大小，因为一个点可以是多条线的起点
      var that = this;
      getRailQuantity().then(res => {
        that.mapData = res;
        that.drawMap();
      });
    },
    getAirQuantity() {
      var that = this;
      getAirQuantity().then(res => {
        that.mapData = res;
        that.drawMap();
      });
    }
  }
};
</script>

<style>
</style>
