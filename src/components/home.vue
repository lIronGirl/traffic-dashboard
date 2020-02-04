<template>
  <div id="homepage">
    <bg-map class="bg-map"></bg-map>
    <home-header class="home-header" msg="dddddddddd"></home-header>
    <main class="main-content">
      <section class="section1">
        <trip-mode-ratio></trip-mode-ratio>
        <city-clusters-index></city-clusters-index>
      </section>
      <section class="section2"></section>
      <section class="section3"></section>
    </main>
  </div>
</template>

<script>
import HomeHeader from "./Header";
import BgMap from "./MyMap";
import TripModeRatio from "./TripModeRatio";
import CityClustersIndex from "./CityClustersIndex";

export default {
  name: "homepage",
  components: {
    HomeHeader,
    BgMap,
    TripModeRatio,
    CityClustersIndex
  }
};
</script>

<style lang="less" scoped>
#homepage {
  height: 100%;
  width: 100%;
  position: relative;
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
    margin: 0 20px;
    section {
      flex: 1;
      &.section1,
      &.section3 {
        margin-top: 70px;
      }
      >div {
          margin-top: 30px;
      }
    }
  }
}
</style>
