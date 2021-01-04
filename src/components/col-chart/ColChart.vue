<template>
  <div class="eger-col-chart">
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      :title="title"
    >
      <rect :width="width" :height="rect.height" :y="rect.y" :fill="color" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ColChart',

  props: {
    value: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      width: 90,
      height: 100
    }
  },

  computed: {
    viewBox () {
      return `0 0 ${this.width} ${this.height}`
    },
    rect () {
      return {
        height: (this.value / 100) * this.height,
        y: this.height - (this.value / 100) * this.height
      }
    },
    title () {
      return `${this.value}%`
    }
  }
}
</script>

<style lang="less">
.eger-col-chart {
  position: relative;
  overflow: hidden;

  background: fade(#dfe9ed, 25%);

  max-width: 80px;
  margin-left: auto;
  margin-right: auto;

  &:before {
    content: '';
    display: block;
    padding-bottom: percentage((100/90));
  }

  > svg {
    position: absolute;
    display: block;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
