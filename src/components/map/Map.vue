<template>
  <div class="eger-infographic map">
    <div class="map"></div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import worldLow from '@amcharts/amcharts4-geodata/worldLow'

am4core.addLicense('CH238702837')

export default {
  name: 'Map',

  props: {
    code: {
      type: String,
      required: true
    }
  },

  computed: {
    countries () {
      return this.code.split(',')
    }
  },

  mounted () {
    // Create chart instance
    const map = am4core.create(this.$el.querySelector('.map'), am4maps.MapChart)
    map.geodata = worldLow
    map.projection = new am4maps.projections.NaturalEarth1()
    map.seriesContainer.draggable = false
    map.seriesContainer.resizable = false
    map.maxZoomLevel = 1

    // base map
    const base = new am4maps.MapPolygonSeries()
    base.useGeodata = true
    base.exclude = ['AQ']
    base.mapPolygons.template.fill = am4core.color('#bfd3db')
    base.mapPolygons.template.focusable = false

    // highlighted country
    const highlights = new am4maps.MapPolygonSeries()
    highlights.useGeodata = true
    highlights.exclude = ['AQ']
    highlights.include = this.countries
    highlights.mapPolygons.template.fill = am4core.color('#EB5757')

    // if more than one country, add tooltips
    if (this.countries.length > 1) {
      highlights.mapPolygons.template.tooltipText = '{name}'
      highlights.tooltip.label.fontSize = 14
      highlights.tooltip.getFillFromObject = false
      highlights.tooltip.background.fill = am4core.color('#333')
      highlights.tooltip.background.strokeWidth = 0
      highlights.tooltip.background.cornerRadius = 3
      highlights.calculateVisualCenter = true
      highlights.mapPolygons.template.tooltipPosition = 'fixed'
    }

    // add both series to the map
    map.series.push(base)
    map.series.push(highlights)
  }
}
</script>

<style lang="less">
.eger-infographic.map {
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  &:before {
    content: '';
    display: block;
    padding-bottom: percentage((640/1280));
  }

  .map,
  svg {
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
