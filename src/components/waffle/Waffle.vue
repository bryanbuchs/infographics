<template>
  <div class="eger-infographic waffle">
    <div class="points">
      <i v-for="dot in space"></i>
      <i v-for="dot in data" :style="`background: ${hex};`"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Waffle',

  props: {
    value: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      required: true
    }
  },

  computed: {
    wholeValue () {
      return Math.round(this.value)
    },
    space () {
      return [...Array(100 - this.wholeValue).keys()]
    },
    data () {
      return [...Array(this.wholeValue).keys()]
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
.eger-infographic.waffle {
  position: relative;
  overflow: hidden;
  color: #bfd3db;

  max-width: 100px;
  margin-left: auto;
  margin-right: auto;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .points {
    position: absolute;
    display: block;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: grid;
    direction: rtl;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 2.04081633%;
  }

  i {
    display: block;
    border-radius: 50%;
    background: #bfd3db;
  }
}
</style>
