## Creation of the built files

In this repository, we are uploading a built version of the chart.js library because the last version 4.4.3 does not support ES5. To fix this we had to transpile the built library to ES5. To do that we had to add some libraries and execute a script. I'm leaving the code in case you want to upgrade the version of the library.
```
"devDependencies": {
    "@babel/cli": "^7.24.8",
    "@babel/core": "^7.25.2",
    "@babel/preset-env": "^7.25.3",
    "babel-minify": "^0.5.2",
    "babel-plugin-minify-simplify": "^0.5.1",
    "chart.js": "4.4.3",
    "uglify-js": "^3.19.1"
  },
  "scripts": {
    "build": "babel node_modules/chart.js/dist/chart.umd.js --out-dir dist/ --presets=@babel/preset-env"
  }
```
We install babel and babel-present and we use them to transpile the already built files of the ChartJS library to es5. Also, We used uglify lib to minify the translated file.

## License

MIT
