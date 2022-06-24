# Nodejs Logger

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

### The way to call these are:

#### Info
```js
new Logger({
  info: true,
  message: "This is an info message"
})
```

##### Returns
![Alt Text](https://github.com/Caallum/Nodejs-Logger/blob/main/images/image_2022-06-24_213150396.png "Info Message Output")

#### Success
```js
new Logger({
  success: true,
  message: "This is a success message"
})
```

##### Returns
![Alt Text](https://github.com/Caallum/Nodejs-Logger/blob/main/images/image_2022-06-24_213158266.png "Success Message Output")

#### Warning
```js
new Logger({
  warning: true,
  message: "This is a warning message"
})
```

##### Returns
![Alt Text](https://github.com/Caallum/Nodejs-Logger/blob/main/images/image_2022-06-24_213142504.png "Warning Message Output")

#### Error
```js
new Logger({
  error: true,
  message: "This is an error message"
})
```

##### Returns
![Alt Text](https://github.com/Caallum/Nodejs-Logger/blob/main/images/image_2022-06-24_213130883.png "Error Message Output")


## Ending

And that's it! I created this for a project I was working on and thought it was pretty handy to have as a GitHub repo. With a little help from google and some brainpower I made this inside about 10 minutes so "no errors will occur at all"!

> Made by Caallum for public usage
