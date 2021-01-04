<template>
  <div class="eger-infographic grid">
    <div class="gauge">
      <i v-for="dot in space"></i>
      <i v-for="dot in data" :style="`background: ${color};`"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',

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
    }
  }
}
</script>

<style lang="less">
.eger-infographic.grid {
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

  .gauge {
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
