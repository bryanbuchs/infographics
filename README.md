# popcouncil-eger-infographics

Externalized web component for the EGER site. Usage:

```
<eger-infographic type="pictorial" img="person" value="45" fill="#5DB1C5" />
<eger-infographic type="dots" value="72" fill="#EB5757" />
<eger-infographic type="pictorial" img="person" value="33" fill="#006B9C" />
<eger-infographic type="pictorial" img="person" value="20" fill="#EF923A" />

<eger-infographic type="pictorial" img="school" value="100" fill="#EB5757" />
<eger-infographic type="pictorial" img="chalkboard-teacher" value="100" fill="#EF923A" />
<eger-infographic type="donut" value="5.24" fill="#006B9C" />

<eger-col-chart value="86.9" fill="#FCB287" />
<eger-col-chart value="81.4" fill="#EB5757" />
```

Infgraphics will be rendered on a square SVG canvas. Parent page is responsible for sizing.

Column Charts will be rendered as a square with 5% padding on either side.

Essentially, these will be treated like `img` tags, with data and other props. Parent page is responsible for layout & sizing.

## Project setup

```
npm install
```

### Start a Storybook instance for preview & development

```
npm run serve
```

### Compiles each component into its own webcomponent

```
npm run build
```
