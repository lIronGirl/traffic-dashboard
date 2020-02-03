<template>
    <div id="homepage">
        <bg-map class="bg-map"></bg-map>
        <home-header class="home-header" msg="dddddddddd"></home-header>
        <div class="main-content">
            
        </div>
    </div>
</template>

<script>
import HomeHeader from './Header'
import BgMap from './MyMap'

export default {
  name: 'homepage',
  components: {
    HomeHeader,
    BgMap
  }
}
</script>

<style lang="less" scoped>
#homepage {
    height: 100%;
    width: 100%;
    position: relative;
    .home-header {
        // display: none;
    }
    .bg-map {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
}

</style>
