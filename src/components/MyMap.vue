<template>
  <div id="map-dom"></div>
</template>

<script>
import { mapStyle1 } from "../assets/mapStyle.js";
import geoCoordMap from "../assets/geoCoordMap";
import "echarts/extension/bmap/bmap";

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
      // 基于准备好的dom，初始化echarts实例
      that.myChart =
        that.myChart || this.$echarts.init(document.getElementById("map-dom"));
      let baseOpt = {
        tooltip: {
          trigger: "item"
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: mapStyle1
          }
        }
      };

      let option =
        seriesType === "scatter"
          ? {
              series: [
                {
                  type: "scatter",
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
                  coordinateSystem: "bmap",
                  data: convertData(
                    that.mapData
                      .sort(function(a, b) {
                        return b.value - a.value;
                      })
                      .slice(0, 6)
                  ),
                  symbolSize: function(val) {
                    return val[2] / 10;
                  },
                  showEffectOn: "render",
                  rippleEffect: {
                    brushType: "stroke"
                  },
                  hoverAnimation: true,
                  label: {
                    formatter: "{b}",
                    position: "right",
                    show: true
                  },
                  itemStyle: {
                    color: seriesColor,
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
      this.mapData = [
        { name: "海门", value: 9 },
        { name: "鄂尔多斯", value: 12 },
        { name: "招远", value: 12 },
        { name: "舟山", value: 12 },
        { name: "齐齐哈尔", value: 14 },
        { name: "盐城", value: 15 },
        { name: "赤峰", value: 16 },
        { name: "青岛", value: 18 },
        { name: "乳山", value: 18 },
        { name: "金昌", value: 19 },
        { name: "泉州", value: 21 },
        { name: "莱西", value: 21 },
        { name: "日照", value: 21 },
        { name: "胶南", value: 22 },
        { name: "南通", value: 23 },
        { name: "拉萨", value: 24 },
        { name: "云浮", value: 24 },
        { name: "梅州", value: 25 },
        { name: "文登", value: 25 },
        { name: "上海", value: 25 },
        { name: "攀枝花", value: 25 },
        { name: "威海", value: 25 },
        { name: "承德", value: 25 },
        { name: "厦门", value: 26 },
        { name: "汕尾", value: 26 },
        { name: "潮州", value: 26 },
        { name: "丹东", value: 27 },
        { name: "太仓", value: 27 },
        { name: "曲靖", value: 27 },
        { name: "烟台", value: 28 },
        { name: "福州", value: 29 },
        { name: "瓦房店", value: 30 },
        { name: "即墨", value: 30 },
        { name: "抚顺", value: 31 },
        { name: "玉溪", value: 31 },
        { name: "张家口", value: 31 },
        { name: "阳泉", value: 31 },
        { name: "莱州", value: 32 },
        { name: "湖州", value: 32 },
        { name: "汕头", value: 32 },
        { name: "昆山", value: 33 },
        { name: "宁波", value: 33 },
        { name: "湛江", value: 33 },
        { name: "揭阳", value: 34 },
        { name: "荣成", value: 34 },
        { name: "连云港", value: 35 },
        { name: "葫芦岛", value: 35 },
        { name: "常熟", value: 36 },
        { name: "东莞", value: 36 },
        { name: "河源", value: 36 },
        { name: "淮安", value: 36 },
        { name: "泰州", value: 36 },
        { name: "南宁", value: 37 },
        { name: "营口", value: 37 },
        { name: "惠州", value: 37 },
        { name: "江阴", value: 37 },
        { name: "蓬莱", value: 37 },
        { name: "韶关", value: 38 },
        { name: "嘉峪关", value: 38 },
        { name: "广州", value: 38 },
        { name: "延安", value: 38 },
        { name: "太原", value: 39 },
        { name: "清远", value: 39 },
        { name: "中山", value: 39 },
        { name: "昆明", value: 39 },
        { name: "寿光", value: 40 },
        { name: "盘锦", value: 40 },
        { name: "长治", value: 41 },
        { name: "深圳", value: 41 },
        { name: "珠海", value: 42 },
        { name: "宿迁", value: 43 },
        { name: "咸阳", value: 43 },
        { name: "铜川", value: 44 },
        { name: "平度", value: 44 },
        { name: "佛山", value: 44 },
        { name: "海口", value: 44 },
        { name: "江门", value: 45 },
        { name: "章丘", value: 45 },
        { name: "肇庆", value: 46 },
        { name: "大连", value: 47 },
        { name: "临汾", value: 47 },
        { name: "吴江", value: 47 },
        { name: "石嘴山", value: 49 },
        { name: "沈阳", value: 50 },
        { name: "苏州", value: 50 },
        { name: "茂名", value: 50 },
        { name: "嘉兴", value: 51 },
        { name: "长春", value: 51 },
        { name: "胶州", value: 52 },
        { name: "银川", value: 52 },
        { name: "张家港", value: 52 },
        { name: "三门峡", value: 53 },
        { name: "锦州", value: 54 },
        { name: "南昌", value: 54 },
        { name: "柳州", value: 54 },
        { name: "三亚", value: 54 },
        { name: "自贡", value: 56 },
        { name: "吉林", value: 56 },
        { name: "阳江", value: 57 },
        { name: "泸州", value: 57 },
        { name: "西宁", value: 57 },
        { name: "宜宾", value: 58 },
        { name: "呼和浩特", value: 58 },
        { name: "成都", value: 58 },
        { name: "大同", value: 58 },
        { name: "镇江", value: 59 },
        { name: "桂林", value: 59 },
        { name: "张家界", value: 59 },
        { name: "宜兴", value: 59 },
        { name: "北海", value: 60 },
        { name: "西安", value: 61 },
        { name: "金坛", value: 62 },
        { name: "东营", value: 62 },
        { name: "牡丹江", value: 63 },
        { name: "遵义", value: 63 },
        { name: "绍兴", value: 63 },
        { name: "扬州", value: 64 },
        { name: "常州", value: 64 },
        { name: "潍坊", value: 65 },
        { name: "重庆", value: 66 },
        { name: "台州", value: 67 },
        { name: "南京", value: 67 },
        { name: "滨州", value: 70 },
        { name: "贵阳", value: 71 },
        { name: "无锡", value: 71 },
        { name: "本溪", value: 71 },
        { name: "克拉玛依", value: 72 },
        { name: "渭南", value: 72 },
        { name: "马鞍山", value: 72 },
        { name: "宝鸡", value: 72 },
        { name: "焦作", value: 75 },
        { name: "句容", value: 75 },
        { name: "北京", value: 79 },
        { name: "徐州", value: 79 },
        { name: "衡水", value: 80 },
        { name: "包头", value: 80 },
        { name: "绵阳", value: 80 },
        { name: "乌鲁木齐", value: 84 },
        { name: "枣庄", value: 84 },
        { name: "杭州", value: 84 },
        { name: "淄博", value: 85 },
        { name: "鞍山", value: 86 },
        { name: "溧阳", value: 86 },
        { name: "库尔勒", value: 86 },
        { name: "安阳", value: 90 },
        { name: "开封", value: 90 },
        { name: "济南", value: 92 },
        { name: "德阳", value: 93 },
        { name: "温州", value: 95 },
        { name: "九江", value: 96 },
        { name: "邯郸", value: 98 },
        { name: "临安", value: 99 },
        { name: "兰州", value: 99 },
        { name: "沧州", value: 100 },
        { name: "临沂", value: 103 },
        { name: "南充", value: 104 },
        { name: "天津", value: 105 },
        { name: "富阳", value: 106 },
        { name: "泰安", value: 112 },
        { name: "诸暨", value: 112 },
        { name: "郑州", value: 113 },
        { name: "哈尔滨", value: 114 },
        { name: "聊城", value: 116 },
        { name: "芜湖", value: 117 },
        { name: "唐山", value: 119 },
        { name: "平顶山", value: 119 },
        { name: "邢台", value: 119 },
        { name: "德州", value: 120 },
        { name: "济宁", value: 120 },
        { name: "荆州", value: 127 },
        { name: "宜昌", value: 130 },
        { name: "义乌", value: 132 },
        { name: "丽水", value: 133 },
        { name: "洛阳", value: 134 },
        { name: "秦皇岛", value: 136 },
        { name: "株洲", value: 143 },
        { name: "石家庄", value: 147 },
        { name: "莱芜", value: 148 },
        { name: "常德", value: 152 },
        { name: "保定", value: 153 },
        { name: "湘潭", value: 154 },
        { name: "金华", value: 157 },
        { name: "岳阳", value: 169 },
        { name: "长沙", value: 175 },
        { name: "衢州", value: 177 },
        { name: "廊坊", value: 193 },
        { name: "菏泽", value: 194 },
        { name: "合肥", value: 229 },
        { name: "武汉", value: 273 },
        { name: "大庆", value: 279 }
      ];

      this.drawMap();
    },
    getAttractionQuantity() {
      this.mapData = [
        { name: "海门", value: 9 },
        { name: "鄂尔多斯", value: 12 },
        { name: "招远", value: 12 },
        { name: "舟山", value: 12 },
        { name: "齐齐哈尔", value: 14 },
        { name: "盐城", value: 15 },
        { name: "赤峰", value: 16 },
        { name: "青岛", value: 180 },
        { name: "乳山", value: 18 },
        { name: "金昌", value: 19 },
        { name: "泉州", value: 21 },
        { name: "莱西", value: 21 },
        { name: "日照", value: 21 },
        { name: "胶南", value: 22 },
        { name: "南通", value: 23 },
        { name: "拉萨", value: 24 },
        { name: "云浮", value: 24 },
        { name: "梅州", value: 25 },
        { name: "文登", value: 25 },
        { name: "上海", value: 25 },
        { name: "攀枝花", value: 25 },
        { name: "威海", value: 25 },
        { name: "承德", value: 25 },
        { name: "厦门", value: 26 },
        { name: "汕尾", value: 26 },
        { name: "潮州", value: 26 },
        { name: "丹东", value: 27 },
        { name: "太仓", value: 27 },
        { name: "曲靖", value: 27 },
        { name: "烟台", value: 28 },
        { name: "福州", value: 29 },
        { name: "瓦房店", value: 30 },
        { name: "即墨", value: 30 },
        { name: "抚顺", value: 31 },
        { name: "玉溪", value: 31 },
        { name: "张家口", value: 31 },
        { name: "阳泉", value: 31 },
        { name: "莱州", value: 32 },
        { name: "湖州", value: 32 },
        { name: "汕头", value: 32 },
        { name: "昆山", value: 33 },
        { name: "宁波", value: 33 },
        { name: "湛江", value: 33 },
        { name: "揭阳", value: 34 },
        { name: "荣成", value: 34 },
        { name: "连云港", value: 35 },
        { name: "葫芦岛", value: 35 },
        { name: "常熟", value: 36 },
        { name: "东莞", value: 36 },
        { name: "河源", value: 36 },
        { name: "淮安", value: 36 },
        { name: "泰州", value: 36 },
        { name: "南宁", value: 37 },
        { name: "营口", value: 37 },
        { name: "惠州", value: 37 },
        { name: "江阴", value: 37 },
        { name: "蓬莱", value: 37 },
        { name: "韶关", value: 38 },
        { name: "嘉峪关", value: 38 },
        { name: "广州", value: 38 },
        { name: "延安", value: 38 },
        { name: "太原", value: 39 },
        { name: "清远", value: 39 },
        { name: "中山", value: 39 },
        { name: "昆明", value: 39 },
        { name: "石嘴山", value: 49 },
        { name: "沈阳", value: 50 },
        { name: "苏州", value: 50 },
        { name: "茂名", value: 50 },
        { name: "嘉兴", value: 51 },
        { name: "长春", value: 51 },
        { name: "胶州", value: 52 },
        { name: "银川", value: 52 },
        { name: "张家港", value: 52 },
        { name: "三门峡", value: 53 },
        { name: "锦州", value: 54 },
        { name: "南昌", value: 54 },
        { name: "柳州", value: 54 },
        { name: "三亚", value: 300 },
        { name: "自贡", value: 56 },
        { name: "吉林", value: 56 },
        { name: "阳江", value: 57 },
        { name: "泸州", value: 57 },
        { name: "西宁", value: 57 },
        { name: "宜宾", value: 58 },
        { name: "呼和浩特", value: 58 },
        { name: "成都", value: 58 },
        { name: "大同", value: 58 },
        { name: "镇江", value: 59 },
        { name: "桂林", value: 59 },
        { name: "张家界", value: 59 },
        { name: "宜兴", value: 59 },
        { name: "北海", value: 60 },
        { name: "西安", value: 61 },
        { name: "金坛", value: 62 },
        { name: "东营", value: 62 },
        { name: "牡丹江", value: 63 },
        { name: "遵义", value: 63 },
        { name: "绍兴", value: 63 },
        { name: "扬州", value: 64 },
        { name: "常州", value: 64 },
        { name: "潍坊", value: 65 },
        { name: "重庆", value: 66 },
        { name: "台州", value: 67 },
        { name: "南京", value: 67 },
        { name: "滨州", value: 70 },
        { name: "贵阳", value: 71 },
        { name: "无锡", value: 71 },
        { name: "本溪", value: 71 },
        { name: "克拉玛依", value: 72 },
        { name: "渭南", value: 72 },
        { name: "马鞍山", value: 72 },
        { name: "宝鸡", value: 72 },
        { name: "焦作", value: 75 },
        { name: "句容", value: 75 },
        { name: "北京", value: 79 },
        { name: "徐州", value: 79 },
        { name: "衡水", value: 80 },
        { name: "包头", value: 80 },
        { name: "绵阳", value: 80 },
        { name: "乌鲁木齐", value: 84 },
        { name: "枣庄", value: 84 },
        { name: "南充", value: 104 },
        { name: "天津", value: 105 },
        { name: "富阳", value: 106 },
        { name: "泰安", value: 112 },
        { name: "诸暨", value: 112 },
        { name: "郑州", value: 113 },
        { name: "哈尔滨", value: 114 },
        { name: "聊城", value: 116 },
        { name: "芜湖", value: 117 },
        { name: "唐山", value: 119 },
        { name: "平顶山", value: 119 },
        { name: "邢台", value: 119 },
        { name: "德州", value: 120 },
        { name: "济宁", value: 120 },
        { name: "荆州", value: 127 },
        { name: "宜昌", value: 130 },
        { name: "义乌", value: 132 },
        { name: "丽水", value: 133 },
        { name: "洛阳", value: 134 },
        { name: "秦皇岛", value: 136 },
        { name: "株洲", value: 143 },
        { name: "石家庄", value: 147 },
        { name: "莱芜", value: 148 },
        { name: "常德", value: 152 },
        { name: "保定", value: 153 },
        { name: "湘潭", value: 154 },
        { name: "金华", value: 157 },
        { name: "岳阳", value: 169 },
        { name: "长沙", value: 175 },
        { name: "衢州", value: 177 },
        { name: "廊坊", value: 193 },
        { name: "菏泽", value: 194 },
        { name: "合肥", value: 229 },
        { name: "武汉", value: 23 },
        { name: "大庆", value: 98 }
      ];
      this.drawMap();
    },
    getRailQuantity() {
      // TODO 是否需要区分点的大小，如果需要区分，怎么知道每个点的大小，因为一个点可以是多条线的起点
      this.mapData = [
        [
          {
            name: "北京"
          },
          {
            name: "上海",
            value: 95
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "广州",
            value: 90
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "大连",
            value: 80
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "南宁",
            value: 70
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "南昌",
            value: 60
          }
        ],
        [
          {
            name: "广州"
          },
          {
            name: "拉萨",
            value: 50
          }
        ],
        [
          {
            name: "广州"
          },
          {
            name: "长春",
            value: 40
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "包头",
            value: 30
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "重庆",
            value: 20
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "常州",
            value: 10
          }
        ]
      ];
      this.drawMap();
    },
    getAirQuantity() {
      this.mapData = [
        [
          {
            name: "上海"
          },
          {
            name: "包头",
            value: 95
          }
        ],
        [
          {
            name: "广州"
          },
          {
            name: "昆明",
            value: 90
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "广州",
            value: 80
          }
        ],
        [
          {
            name: "广州"
          },
          {
            name: "郑州",
            value: 70
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "长春",
            value: 60
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "重庆",
            value: 50
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "长沙",
            value: 40
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "北京",
            value: 30
          }
        ],
        [
          {
            name: "石家庄"
          },
          {
            name: "丹东",
            value: 20
          }
        ],
        [
          {
            name: "石家庄"
          },
          {
            name: "大连",
            value: 10
          }
        ]
      ];
      this.drawMap();
    }
  }
};
</script>

<style>
</style>
