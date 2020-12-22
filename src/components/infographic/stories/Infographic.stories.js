import EgerInfographic from '../Infographic.vue'

// import SampleData from './data.json'

export default {
  title: 'EGER/Infographic',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    }
  }
}

const propData = {
  value: 70
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { EgerInfographic },
  props: Object.keys(argTypes),
  template: `<eger-infographic :value="value" />`
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  ...propData
}
