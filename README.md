# generate-weapp-page [![Build Status](https://travis-ci.org/zce/generate-weapp-page.svg?branch=master)](https://travis-ci.org/zce/generate-weapp-page)

> Auto generate wechat weapp page


## Install

```
$ npm install generate-weapp-page --save
```


## Usage

```js
const generatePage = require('generate-weapp-page')

const files = generatePage({
  name: 'index',
  json: false,
  less: true,
  scss: false,
  css: false
})
console.log(files)
```


## Node.js API

### generatePage(options, callback)

#### options

Type: `Object`

options.

#### return files

Type: `Array` or `Boolean`

Generated files or exists


## License

MIT © [汪磊](http://github.com/zce)
