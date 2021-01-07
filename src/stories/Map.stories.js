import EgerInfographicMap from '@/components/map/Map.vue'

export default {
  title: 'Infographic/Map',
  argTypes: {
    code: { table: { disable: true } }
  }
}

const DefaultTemplate = (args, { argTypes }) => {
  return {
    components: { EgerInfographicMap },
    props: Object.keys(argTypes),
    template: `<eger-infographic-map 
                :code="code" 
              />`
  }
}

export const Single = DefaultTemplate.bind({})
Single.args = {
  code: 'IN'
}

export const Multiple = DefaultTemplate.bind({})
Multiple.args = {
  code: 'KE,TZ,ET,UG'
}
