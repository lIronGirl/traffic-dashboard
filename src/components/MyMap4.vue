<template>
  <div id="map4-dom"></div>
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
        that.myChart || this.$echarts.init(document.getElementById("map4-dom"));
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

      let option = {
        series: [
          {
            type: "effectScatter",
            coordinateSystem: "bmap",
            zlevel: 2,
            label: {
              show: true,
              formatter: "{b}",
              position: "right",
              color: "#fff"
            },
            symbolSize: 5,
            showEffectOn: "render",
            itemStyle: {
              normal: {
                color: "#4bccec"
              }
            },
            data: that.mapData.citys
          },
          {
            type: "lines",
            coordinateSystem: "bmap",
            zlevel: 2,
            large: true,
            effect: {
              show: true,
              constantSpeed: 80,
              trailLength: 0.4,
              color: "#4bccec",
              symbol: "arrow",
              symbolSize: 8
            },
            lineStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#4bccec"
                    },
                    {
                      offset: 1,
                      color: "#a680ff"
                    }
                  ],
                  false
                ),
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            data: that.mapData.moveLines
          }
        ]
      };

      that.myChart.clear();
      that.myChart.setOption({ ...baseOpt, ...option }, { notMerge: true });
      that.myMap = that.myChart
        .getModel()
        .getComponent("bmap")
        .getBMap();
      that.setFitView(that.mapData.moveLines[0].coords);
    },
    setFitView(citysCoords) {
      let points = [];
      for (let i = 0; i < citysCoords.length; i++) {
        const coords = citysCoords[i];
        /* global BMap*/
        points.push(new BMap.Point(coords[0], coords[1]));
      }
      this.myMap.setViewport(points, {
        margins: [100, 20, 20, 400]
      });
    }
  }
};
</script>

<style>
</style>
