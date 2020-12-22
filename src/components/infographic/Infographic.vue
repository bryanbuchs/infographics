<template>
  <div class="eger-infographic"></div>
</template>

<script>
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faChalkboardTeacher,
  faSchool
} from '@fortawesome/free-solid-svg-icons'

import * as am4core from '@amcharts/amcharts4/core'
// import * as am4charts from '@amcharts/amcharts4/charts'

// library.add(faUser)

// console.log(faUser, faChalkboardTeacher, faSchool)

// const user = icon({ prefix: 'fas', iconName: 'user' })

export default {
  name: 'Infographic',

  props: {
    value: {
      type: Number,
      default: 100
    }
  },

  data () {
    return {
      gray: '#bfd3db',
      blue: '#006B9C'
    }
  },

  computed: {
    maskPath () {
      // faUser,
      // faChalkboardTeacher,
      // faSchool

      return faSchool.icon[4]
    }
  },

  mounted () {
    const component = am4core.create(this.$el, am4core.Container)
    const background = component.createChild(am4core.Sprite)
    const mask = component.createChild(am4core.Sprite)
    const bar = component.createChild(am4core.Rectangle)

    component.width = am4core.percent(100)
    component.height = am4core.percent(100)

    background.fill = am4core.color(this.blue)
    background.path = this.maskPath
    background.scale = component.pixelWidth / 640

    mask.path = this.maskPath
    mask.scale = component.pixelWidth / 640

    bar.fill = am4core.color(this.gray)
    bar.mask = mask
    bar.height = am4core.percent(100 - this.value)
    bar.width = am4core.percent(100)

    component.events.on('maxsizechanged', () => this.resize())

    this.component = component
    this.bar = bar
    this.background = background
    this.mask = mask
  },

  beforeDestroy () {
    if (this.component) {
      this.component.dispose()
    }
  },

  methods: {
    resize () {
      const scale = this.component.pixelWidth / 640
      this.background.scale = scale
      this.mask.scale = scale
    }
  },

  watch: {
    value: function () {
      this.bar.height = am4core.percent(100 - this.value)
      this.component.invalidate()
    }
  }
}
</script>

<style lang="less">
.eger-infographic {
  outline: 1px dotted red;
  outline-offset: 2px;

  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: percentage((512/640));
  }

  > div[style] {
    position: absolute !important;
    margin: 0 !important;
    padding: 0 !important;
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;
    right: 0 !important;
  }
}
</style>
