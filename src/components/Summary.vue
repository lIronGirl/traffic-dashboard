<template>
  <ol @click="clickIndicator($event)">
    <li class="indicator" indicator="occur">
      <h5>发生量</h5>
      <span class="value">
        <strong style="color: #4bccec">{{ sumData.occurCount }}</strong>
        <span>次</span>
      </span>
    </li>
    <li class="indicator" indicator="attr">
      <h5>吸引量</h5>
      <span class="value">
        <strong style="color: #a680ff">{{ sumData.attrCount }}</strong>
        <span>次</span>
      </span>
    </li>
    <li class="indicator" indicator="rail">
      <h5>高铁出行量</h5>
      <span class="value">
        <strong style="color: #4bccec">{{ sumData.railCount }}</strong>
        <span>次</span>
      </span>
    </li>
    <li class="indicator" indicator="air">
      <h5>飞机出行量</h5>
      <span class="value">
        <strong style="color: #a680ff">{{ sumData.airCount }}</strong>
        <span>次</span>
      </span>
    </li>
  </ol>
</template>

<script>
export default {
  name: "tripModeRatioChart",
  components: {},
  data() {
    return {
      sumData: {}
    };
  },
  created() {
    var that = this;
    // 先获取数据
    that.getSummary();
  },
  methods: {
    getSummary() {
      //  接口获取高铁飞机出行量
      this.sumData = {
        occurCount: 2345387,
        attrCount: 4323434,
        railCount: 231323,
        airCount: 122330
      };
    },
    clickIndicator(e) {
      let node = e.target;
      while (node.parentNode.nodeName != "BODY") {
        if (node.nodeName == "LI") {
          break;
        }
        node = node.parentNode;
      }

      this.$emit("onIndicatorClick", node.getAttribute('indicator'));
    }
  }
};
</script>

<style lang="less" scoped>
ol {
  margin: 0 auto;
  padding: 0;
  li.indicator {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    h5 {
      font-size: 16px;
      font-weight: 400;
    }
    span.value {
      strong {
        font-size: 28px;
        font-weight: 300;
      }
      span {
        font-size: 12px;
        margin-left: 4px;
      }
    }
  }
}
</style>
