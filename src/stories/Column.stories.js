import EgerInfographicColumn from '@/components/column/Column.vue'

import { colors } from './colors.js'

export default {
  title: 'Infographic/Column',
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
  value: 70,
  color: colors[0]
}

const DefaultTemplate = (args, { argTypes }) => {
  return {
    components: { EgerInfographicColumn },
    props: Object.keys(argTypes),
    template: `<eger-infographic-column 
                :value="value" 
                :color="color" 
              />`
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  ...propData
}
