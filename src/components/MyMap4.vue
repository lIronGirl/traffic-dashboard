<template>
  <div id="map4-dom"></div>
</template>

<script>
import { mapStyle1 } from "../assets/mapStyle.js";
import "echarts/extension/bmap/bmap";

export default {
  name: "myMap4",
  data() {
    return {
      myChart: null,
      myMap: null
    };
  },
  props: {
    mapData: {
      type: Object
    }
  },
  watch: {
    mapData() {
      this.drawMap();
    }
  },
  methods: {
    drawMap() {
      let that = this;
      let planePath = "image://" + require("../assets/icon/plane.png");
      // "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      let carPath = "image://" + require("../assets/icon/car.png");
      // "path://M 213.333 469.333 L 277.333 277.333 L 746.667 277.333 L 810.667 469.333 M 746.667 682.667 C 711.253 682.667 682.667 654.08 682.667 618.667 C 682.667 583.253 711.253 554.667 746.667 554.667 C 782.08 554.667 810.667 583.253 810.667 618.667 C 810.667 654.08 782.08 682.667 746.667 682.667 M 277.333 682.667 C 241.92 682.667 213.333 654.08 213.333 618.667 C 213.333 583.253 241.92 554.667 277.333 554.667 C 312.747 554.667 341.333 583.253 341.333 618.667 C 341.333 654.08 312.747 682.667 277.333 682.667 M 807.253 256 C 798.72 231.253 774.827 213.333 746.667 213.333 L 277.333 213.333 C 249.173 213.333 225.28 231.253 216.747 256 L 128 512 L 128 853.333 C 128 876.8 147.2 896 170.667 896 L 213.333 896 C 236.8 896 256 876.8 256 853.333 L 256 810.667 L 768 810.667 L 768 853.333 C 768 876.8 787.2 896 810.667 896 L 853.333 896 C 876.8 896 896 876.8 896 853.333 L 896 512 L 807.253 256 Z";
      let railPath = "image://" + require("../assets/icon/rail.png");
      // "path://M851.4 631.6c0-10.7-8.7-19.4-19.4-19.4L628.6 612.2c-10.7 0-19.4 8.7-19.4 19.4l0 9.7c0 10.7 8.7 19.4 19.4 19.4L832 660.7c10.7 0 19.4-8.7 19.4-19.4L851.4 631.6zM822.3 515.4l-77.5-106.5c0 0-11.7-18.6-38.7-29.1-64.1-24.8-116.2 9.7-116.2 9.7s-13.5 7-35.9 18.7l42.6 136.3L803 544.5C844 544.3 822.3 515.4 822.3 515.4zM541.5 486.4c-6.2-39.7-32.8-50.1-63.1-39-59.7 31-134.5 69.9-201.5 104.7-3.7 11.3-5.2 26.6 3.1 40.8 7 12.1 13.4 16.6 16.8 18.3l189.1-58.5C525.2 540.6 548.5 531.9 541.5 486.4zM841.7 699.4 105.6 699.4l0-29.1 143.7-44.5c3-4.6 4.5-12.1 1.6-23.3-4.5-17-12.6-24.1-19.1-27-47 24.5-86.4 45-108.1 56.3-13.6 7.1-18.1 19.1-18.1 19.1l0-48.4 406.8-222.8c0 0 121.4-78.4 213.1-48.4 91.7 30 184 251.8 184 251.8S954.6 696.2 841.7 699.4z";
      let travelByMap = {
        plane: planePath,
        car: carPath,
        rail: railPath
      };
      let baseSpeed = 30;
      let speed = {
        plane: baseSpeed * 8,
        car: baseSpeed,
        rail: baseSpeed * 4
      };
      // 基于准备好的dom，初始化echarts实例
      that.myChart =
        that.myChart || this.$echarts.init(document.getElementById("map4-dom"));
      let baseOpt = {
        tooltip: {
          trigger: "item",
          formatter: "{b}"
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
            animation: false,
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
            data: that.mapData.points
          },
          {
            type: "lines",
            polyline: false,
            coordinateSystem: "bmap",
            zlevel: 2,
            animation: false,
            large: true,
            effect: {
              show: true,
              trailLength: 0,
              color: "#4bccec",
              symbol: "arrow",
              symbolSize: 10
            },
            lineStyle: {
              normal: {
                color: "#4bccec",
                width: 1,
                opacity: 1,
                curveness: 0.2
              }
            },
            data: that.mapData.moveLines.map(function(line) {
              return {
                coords: line.coords,
                effect: line.symbol
                  ? {
                      symbol: travelByMap[line.symbol],
                      show: true,
                      trailLength: 0,
                      color: "#4bccec",
                      symbolSize: line.symbol === "rail" ? 30 : 25,
                      constantSpeed: speed[line.symbol]
                      // loop: false,
                      // period: 5,
                      // delay: line.delay * 1000
                    }
                  : {
                      trailLength: 1,
                      color: "#4bccec",
                      symbol: "arrow",
                      symbolSize: 10,
                      period: 5
                      // delay: line.delay * 1000
                    }
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
      that.setFitView(
        that.mapData.points.map(function(point) {
          return point.value;
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
        margins: [100, 20, 20, 400]
      });
    }
  }
};
</script>

<style>
</style>
