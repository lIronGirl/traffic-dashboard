<template>
  <div id="map3-dom"></div>
</template>

<script>
import { mapStyle1 } from "../assets/mapStyle.js";
import "echarts/extension/bmap/bmap";

export default {
  name: "myMap3",
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
    seriesType: {
      default: "scatter"
    }
  },
  watch: {
    mapData() {
      this.drawMap();
    }
  },
  methods: {
    drawMap() {
      var that = this;

      // 基于准备好的dom，初始化echarts实例
      that.myChart =
        that.myChart || this.$echarts.init(document.getElementById("map3-dom"));
      let baseOpt = {
        tooltip: {
          trigger: "item"
        },
        bmap: {
          // center: [110.114129, 42.550339],
          roam: true,
          mapStyle: {
            styleJson: mapStyle1
          }
        }
      };
      let levelColors = ["#ec4b4b", "#eca54b", "#ece84b", "#4bec85"];
      let option = {
        visualMap: {
          min: 10000,
          max: 30000,
          calculable: true,
          color: levelColors,
          textStyle: {
            color: "#fff"
          },
          right: "5%",
          bottom: "5%"
        },
        series: [
          {
            type: "effectScatter",
            coordinateSystem: "bmap",
            data: that.mapData,
            symbolSize: function(val) {
              return val[2] / 2000;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              formatter: "{b}",
              position: "right",
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        ]
      };

      that.myChart.clear();
      that.myChart.setOption({ ...baseOpt, ...option }, { notMerge: true });
      that.myMap = that.myChart
        .getModel()
        .getComponent("bmap")
        .getBMap();
      that.setFitView(
        that.mapData.map(function(data) {
          return data.value.slice(0, 2);
        })
      );
    },
    setFitView(citysCoords) {
      let points = [];
      for (let i = 0; i < citysCoords.length; i++) {
        const coords = citysCoords[i];
        /* global BMap*/
        points.push(new BMap.Point(coords[0], coords[1]));
      }
      this.myMap.setViewport(points, {
        margins: [100, 20, 20, 310]
      });
    }
  }
};
</script>

<style>
</style>
