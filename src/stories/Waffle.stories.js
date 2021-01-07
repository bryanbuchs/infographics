import EgerInfographicWaffle from '@/components/waffle/Waffle.vue'

import { colors } from './colors.js'

export default {
  title: 'Infographic/Waffle',
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
  value: 50,
  color: colors[0]
}

const DefaultTemplate = (args, { argTypes }) => {
  // return the config
  return {
    components: { EgerInfographicWaffle },
    props: Object.keys(argTypes),
    template: `<eger-infographic-waffle 
                :value="value" 
                :color="color" 
              />`
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  ...propData
}
