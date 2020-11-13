<template>
  <header id="homepageheader">
    <h1 class="header-title">{{ pageTitle }}</h1>
    <div class="header-time">{{ nowTime }}</div>
    <ul class="header-links" @click="linkChange($event)">
      <li>
        <router-link to="/">
          <i class="iconfont icon-home" title="中国主要城市出行排行榜"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/cityClustersTravel">客运出行分析</router-link>
      </li>
      <li>
        <router-link to="/stationTraffic">枢纽客流分析</router-link>
      </li>
      <li>
        <router-link to="/individualTravel">联程客运分析</router-link>
      </li>
      <li>
        <router-link to="/trafficPrediction">联程客运需求预测</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

let pageTitle = {
  "/": "中国主要城市出行排行榜",
  "/cityClustersTravel": "京津冀客运出行分析",
  "/stationTraffic": "京津冀枢纽客流分析",
  "/individualTravel": "京津冀联程客运分析",
  "/trafficPrediction": "京津冀联程客运需求预测"
};

export default {
  name: "homeheader",
  data() {
    return {
      nowTime: "",
      pageTitle: ""
    };
  },
  methods: {
    currentTime() {
      setInterval(this.getTime, 1000);
    },
    getTime() {
      this.nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
    },
    linkChange(e) {
      let node = e.target;
      while (node.parentNode.nodeName != "BODY") {
        if (node.nodeName == "A") {
          this.pageTitle = pageTitle[node.hash.slice(1)];
          break;
        }
        node = node.parentNode;
      }
    }
  },
  mounted() {
    this.currentTime();
    this.pageTitle = pageTitle[location.hash.slice(1)];
  },
  beforeDestroy() {
    if (this.getTime) {
      clearInterval(this.getTime);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
header {
  text-align: center;
  position: relative;
  padding-top: 20px;
  z-index: 2;
  a {
    color: #fff;
  }
  h1 {
    padding: 4px 0 8px 0;
    border-bottom: 1px rgba(75, 202, 235, 0.32) solid;
  }
  .header-time {
    position: relative;
    width: 20%;
    margin: 0 auto;
    border-bottom: 1px rgb(28, 73, 92) solid;
    border-top: 1px #111317 solid;
    font-size: 16px;
    padding: 4px 0;
    top: -1px;
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: -16px;
      top: -1px;
      transform: skew(45deg, 0deg);
      border-left: 1px rgb(28, 73, 92) solid;
      border-top: 1px #111317 solid;
    }
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      right: -16px;
      top: -1px;
      transform: skew(-45deg, 0deg);
      border-right: 1px rgb(28, 73, 92) solid;
      border-top: 1px #111317 solid;
    }
  }
  .header-links {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 16px;
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 6px;
      padding: 4px 6px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      a:hover {
        color: #4bccec;
      }
      &:first-child {
        padding-right: 12px;
        padding-left: 12px;
      }
    }
  }
}
</style>