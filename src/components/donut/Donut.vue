<template>
  <div class="eger-infographic donut">
    <svg
      :height="height"
      :width="width"
      :viewBox="`0 0 ${height} ${width}`"
      role="presentation"
      fill="transparent"
    >
      <g v-for="obj in chartData">
        <circle
          :cx="cx"
          :cy="cy"
          :r="radius"
          :stroke="obj.stroke"
          :stroke-width="strokeWidth"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="obj.dashoffset"
          :transform="obj.transform"
        />
      </g>
    </svg>
    <div class="label">{{ `${this.value.toFixed(1)}%` }}</div>
  </div>
</template>

<script>
export default {
  name: 'Donut',

  props: {
    value: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      width: 130,
      height: 130,
      strokeWidth: 18
    }
  },

  computed: {
    cx () {
      return this.width / 2
    },
    cy () {
      return this.height / 2
    },
    radius () {
      return this.width / 2 - this.strokeWidth
    },
    circumference () {
      return 2 * Math.PI * this.radius
    },

    colors () {
      return [this.color, '#bfd3db']
    },

    chartData () {
      const values = [this.value, 100 - this.value]
      const chartData = []
      let angleOffset = -90

      values.forEach((dataVal, index) => {
        const data = {
          value: dataVal,
          degrees: angleOffset,
          stroke: this.colors[index],
          dashoffset: this.calculateStrokeDashOffset(
            dataVal,
            this.circumference
          ),
          transform: `rotate(${angleOffset}, ${this.cx}, ${this.cy})`
        }
        chartData.push(data)
        angleOffset = (dataVal / 100) * 360 + angleOffset
      })

      return chartData
    }
  },

  methods: {
    calculateStrokeDashOffset (dataVal, circumference) {
      const strokeDiff = (dataVal / 100) * circumference
      return circumference - strokeDiff
    }
  }
}
</script>

<style lang="less">
.eger-infographic.donut {
  position: relative;
  overflow: hidden;
  max-width: 130px;
  margin-left: auto;
  margin-right: auto;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  svg {
    position: absolute;
    z-index: 1;
    display: block;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .label {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #004f6d;
    transform: translate(-50%, -50%);
  }
}
</style>
