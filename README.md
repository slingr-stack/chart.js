## Creation of the built files

In this repository, we are uploading a built version of the chart.js library because the last version 4.4.3 is not support for ES5. To fix this we had to transpile the built library to ES5. To do that we had to add some libraries and execute a script. I'm leaving the code in case you want to upgrade the version of the library.
```
{
  "devDependencies": {
    "@babel/cli": "^7.24.1",
    "@babel/core": "^7.24.4",
    "@babel/preset-env": "^7.24.4"
  },
  "scripts": {
    "build": "babel dom/dist --out-dir dist/dom --presets=@babel/preset-env && babel core/dist --out-dir dist/core --presets=@babel/preset-env && babel utils/dist --out-dir dist/utils --presets=@babel/preset-env"
  }
}
```
We install babel and babel-present and we use them to transpile the already built files of the floating-ui library to es5.
Note: I tried to do everything in one step (building the floating-ui library using es5) but couldn't. This is the best solution we could find in the short time that we had. If you find a better solution please update this readme.

## License

MIT