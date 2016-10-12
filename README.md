# generate-weapp-page [![Build Status](https://travis-ci.org/zce/generate-weapp-page.svg?branch=master)](https://travis-ci.org/zce/generate-weapp-page)

> Auto generate wechat weapp page


## Install

```
$ npm install generate-weapp-page --save
```


## Usage

```js
const generatePage = require('generate-weapp-page')

generatePage('index', (err, files) => {
  console.log(files)
})

generatePage({ name: 'index', configuration: false, less: true, scss: false }, (err, files) => {
  console.log(files)
})
```


## Node.js API

### generatePage(option, callback)

#### option

Type: `String`, `Object`

Page name or option.

#### callback(error, files)

Type: `function`

`error` is there only by Node.js convention and is always `null`.

##### files

Type: `Array`

Generated files


## License

MIT © [汪磊](http://github.com/zce)
