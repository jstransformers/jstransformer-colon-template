# jstransformer-colon-template

[colon-template](https://github.com/matthewmueller/colon-template) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-colon-template/master.svg)](https://travis-ci.org/jstransformers/jstransformer-colon-template)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-colon-template/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-colon-template)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-colon-template/master.svg)](http://david-dm.org/jstransformers/jstransformer-colon-template)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-colon-template.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-colon-template.svg)](https://www.npmjs.org/package/jstransformer-colon-template)

## Installation

    npm install jstransformer-colon-template

## API

```js
var colon = require('jstransformer')(require('jstransformer-colon-template'));

colon.render('Hello, :name!', {name: "World"}).body
//=> 'Hello, World!'
```

## License

MIT
