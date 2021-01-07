<template>
  <div class="eger-infographic pictorial">
    <svg role="img" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
      <defs>
        <path id="shape" :d="path.d"></path>
        <mask id="mask">
          <use xlink:href="#shape" fill="#fff" />
        </mask>
      </defs>
      <use xlink:href="#shape" fill="currentColor" />
      <rect
        :width="rect.width"
        :height="rect.height"
        :y="rect.y"
        :fill="hex"
        mask="url(#mask)"
      />
    </svg>
  </div>
</template>

<script>
import {
  faUser,
  faChalkboardTeacher,
  faSchool
} from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Pictorial',

  props: {
    value: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      icons: [
        {
          name: 'faUser',
          width: faUser.icon[0],
          height: faUser.icon[1],
          path: faUser.icon[4]
        },
        {
          name: 'faChalkboardTeacher',
          width: faChalkboardTeacher.icon[0],
          height: faChalkboardTeacher.icon[1],
          path: faChalkboardTeacher.icon[4]
        },
        {
          name: 'faSchool',
          width: faSchool.icon[0],
          height: faSchool.icon[1],
          path: faSchool.icon[4]
        }
      ]
    }
  },

  computed: {
    fa () {
      return this.icons.find(i => i.name === this.icon)
    },
    viewBox () {
      return `0 0 ${this.fa.width} ${this.fa.height}`
    },
    path () {
      return {
        d: this.fa.path
      }
    },
    rect () {
      return {
        width: this.fa.width,
        height: (this.value / 100) * this.fa.height,
        y: this.fa.height - (this.value / 100) * this.fa.height
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
.eger-infographic.pictorial {
  position: relative;
  overflow: hidden;
  color: #bfd3db;

  max-width: 130px;
  margin-left: auto;
  margin-right: auto;

  &:before {
    content: '';
    display: block;
    padding-bottom: percentage((512/640));
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
