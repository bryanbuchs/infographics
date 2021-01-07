import EgerInfographicDonut from '@/components/donut/Donut.vue'

import { colors } from './colors.js'

export default {
  title: 'Infographic/Donut',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 0.1 }
    },
    color: {
      control: {
        type: 'radio',
        options: colors
      }
    }
  }
}

const propData = {
  value: 25,
  color: colors[0]
}

const DefaultTemplate = (args, { argTypes }) => {
  return {
    components: { EgerInfographicDonut },
    props: Object.keys(argTypes),
    template: `<eger-infographic-donut 
                :value="value" 
                :color="color" 
              />`
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  ...propData
}
