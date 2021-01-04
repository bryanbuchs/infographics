import EgerInfographicColumn from '@/components/column/Column.vue'

const colors = [
  { name: 'bluegreen', hex: '#5DB1C5' },
  { name: 'highlight', hex: '#EB5757' },
  { name: 'midblue', hex: '#006B9C' },
  { name: 'orange', hex: '#EF923A' }
]

export default {
  title: 'Infographic/Column',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    theme: {
      control: {
        type: 'radio',
        options: colors.map(o => o.name)
      }
    }
  }
}

const propData = {
  value: 70,
  theme: colors[0].name
}

const DefaultTemplate = (args, { argTypes }) => {
  // create a new key in args that is calculated from another value
  args.color = colors.find(o => o.name === args.theme).hex
  // add that new key to the props array
  const props = [...Object.keys(argTypes), 'color']
  // return the config
  return {
    components: { EgerInfographicColumn },
    props: props,
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
