<template>
  <div id="homepage">
    <main class="main-content">
      <section class="section1">
        <trip-mode-ratio></trip-mode-ratio>
        <city-clusters-index></city-clusters-index>
      </section>
      <section class="section2">
        <summary-data @onIndicatorClick="handleIndicatorClick"></summary-data>
      </section>
      <section class="section3">
        <rank-table></rank-table>
      </section>
    </main>
    <bg-map class="bg-map" :indicator="curSumIndicator"></bg-map>
  </div>
</template>

<script>
import BgMap from "@/components/MyMap";
import TripModeRatio from "../components/TripModeRatio";
import CityClustersIndex from "../components/CityClustersIndex";
import SummaryData from "../components/Summary";
import RankTable from "../components/Rank";

export default {
  name: "homepage",
  data() {
    return {
      curSumIndicator: "occur"
    };
  },
  components: {
    BgMap,
    TripModeRatio,
    CityClustersIndex,
    SummaryData,
    RankTable
  },
  methods: {
    handleIndicatorClick(indicator) {
      this.curSumIndicator = indicator;
    }
  }
};
</script>

<style lang="less" scoped>
#homepage {
  height: 100%;
  width: 100%;
  // position: relative;
  .bg-map {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  main {
    display: -webkit-flex;
    display: flex;
    padding: 20px;
    height: 84%;
    section {
      flex: 1;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      &.section1,
      &.section3 {
        margin-top: 2%;
      }
      &.section2 {
        flex: 1.2;
      }
      > div {
        margin-top: 30px;
        flex: 1;
      }
    }
  }
}
</style>
