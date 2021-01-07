import EgerInfographicPictorial from '@/components/pictorial/Pictorial.vue'

import { colors } from './colors.js'

const icons = ['faSchool', 'faChalkboardTeacher', 'faUser']

export default {
  title: 'Infographic/Pictorial',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 0.1 }
    },
    icon: {
      control: {
        type: 'radio',
        options: icons
      }
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
  icon: icons[0],
  color: colors[0]
}

const DefaultTemplate = (args, { argTypes }) => {
  return {
    components: { EgerInfographicPictorial },
    props: Object.keys(argTypes),
    template: `<eger-infographic-pictorial 
                :value="value" 
                :icon="icon" 
                :color="color" 
              />`
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  ...propData
}
