# React Template

Boilerplate for React apps

##First commit contains:

* **React 16**
* **Webpack** based build
* `npm start` - webpack.dev.js configuration
* `npm run build` - webpack.prod.js configuration - build uglified `/public` files
* `npm run build:serv` - prod configuration with serving on :8080
* `src` and `node_modules` directories marked as module sources
* Linting using **eslint airbnb** configuration
* `npm run format` - format code style using **prettier**
* Styles use **sass** preprocessor
* For testing used Jest and Enzyme stack.

##Branch `transform-class-properties`

transform-class-properties (stage-2) plugin added

```js
class App extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  state = {
    hello: 'hi',
  };
  render() {
    return <h1 className="app__element">{this.state.hello} - {this.props.text}</h1>;
  }
}
```

##Branch `post-css`

Used PostCSS processor with plugins: 'postcss-import', 'postcss-cssnext' and cssnano.
