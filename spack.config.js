const path = require('path');
const { config } = require('@swc/core/spack')


module.exports = config({
  entry: {
    'main': __dirname + '/stories.js',
  },
  output: {
    path: path.join(__dirname, "builds", "stories"),
  },
  module: {},
});

//module.exports = config({
  //entry: {
    //'main': __dirname + '/.storybook/main.js',
  //},
  //output: {
    //path: path.join(__dirname, "builds", "storybook"),
  //},
  //module: {},
//});

/*
module.exports = config({
  entry: {
    'main': require.resolve('ses/lockdown'),
  },
  output: {
    path: path.join(__dirname, "builds", "sesLockdown"),
  },
  module: {},
});
*/

/*
module.exports = config({
  entry: {
    'main': __dirname + '/app/scripts/runLockdown.js',
  },
  output: {
    path: path.join(__dirname, "builds", "runLockdown"),
  },
  module: {},
});
*/

/*
module.exports = config({
  entry: {
    'main': __dirname + '/ui/index.js',
  },
  output: {
    path: path.join(__dirname, "builds", "ui"),
  },
  module: {},
});
*/

/*
module.exports = config({
  entry: {
    'main': __dirname + '/app/scripts/background.js',
  },
  output: {
    path: path.join(__dirname, "builds", "background"),
  },
  module: {},
});
*/

/*
module.exports = config({
  entry: {
    'main': __dirname + '/app/scripts/inpage.js',
  },
  output: {
    path: path.join(__dirname, "builds", "inpage"),
  },
  module: {},
});
*/

/*
module.exports = config({
  entry: {
    'main': __dirname + '/app/scripts/contentscript.js',
  },
  output: {
    path: path.join(__dirname, "builds", "contentscript"),
  },
  module: {},
});
*/

/*
module.exports = config({
  entry: {
    'main': __dirname + '/app/scripts/initSentry.js',
  },
  output: {
    path: path.join(__dirname, "builds", "initSentry"),
  },
  module: {},
});
*/
