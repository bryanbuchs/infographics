<template>
  <div class="eger-infographic column">
    <svg role="img" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
      <rect :width="width" :height="rect.height" :y="rect.y" :fill="hex" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Column',

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
    hex () {
      let hex
      switch (this.color) {
        case 'aquamarine':
          hex = '#5DB1C5'
          break
        case 'red':
          hex = '#EB5757'
          break
        case 'blue':
          hex = '#006B9C'
          break
        case 'orange':
          hex = '#EF923A'
          break
        default:
          hex = this.color
          break
      }
      return hex
    }
  }
}
</script>

<style lang="less">
.eger-infographic.column {
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
