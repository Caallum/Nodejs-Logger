# Nodejs Logger
> Unofficially a NPM package

## Getting started

To get started with calling the logger, make sure to choose the correct file type. If you need to import the file, eg `import Logger from "logger.js"` then use `Logger.import.js`. If you need to require the file, eg `const Logger = require("logger.js")` then use `Logger.require.js`.

Once you have uploaded these files to your project, you can now start to call the logger class!

## Calling the Logger Class

To call the class, make sure to import the file using either

```js
import Logger from "./{file}/{dir}/Logger.import.js
```

or

```js
const Logger = require("./${file/${dir}/Logger.require.js
```

Once you have imported or required the logger file, you can easily log something by putting

```js
new Logger({
  message: "This is a normal message"
})
```

This will return\
![Alt Text](https://github.com/Caallum/Nodejs-Logger/blob/main/images/image_2022-06-24_212525966.png "Normal Message Output")

## More styles

There is more styles, for such things as logging stuff based on important and overall just keeping the console tidy, the different styles are: info, success, warning, error.

The way to call these are:

```js
new Logger({
  info: true,
  message: "This is an info message"
})
```


```js
new Logger({
  success: true,
  message: "This is a success message"
})
```

```js
new Logger({
  warning: true,
  message: "This is a warning message"
})
```

```js
new Logger({
  error: true,
  message: "This is an error message"
})
```
