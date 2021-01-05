# popcouncil-eger-infographics

Externalized web component for the EGER site. Usage:

```
<eger-pictorial icon="faUser" value="45" color="#5DB1C5" />
<eger-pictorial icon="faChalkboardTeacher" value="33" color="#006B9C" />
<eger-pictorial icon="faSchool" value="20" color="#EF923A" />

<eger-column value="86.9" color="#FCB287" />
<eger-column value="81.4" color="#EB5757" />

<eger-donut value="34.5" color="#5DB1C5"></eger-donut>
<eger-donut value="12.3" color="#EB5757"></eger-donut>

<eger-grid value="76" color="#FCB287"></eger-grid>
<eger-grid value="48" color="#EB5757"></eger-grid>
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
npm start
```

### Compiles each component into its a webcomponent

```
npm run build
```
