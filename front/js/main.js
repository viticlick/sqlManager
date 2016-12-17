// Filename: main.js

// Require.js allows us to configure shortcuts alias
require.config({
  shim:{
    "bootstrap":{"deps":['jquery']}
  },
  paths:{
    jquery: 'libs/jquery/dist/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    bootstrap: 'libs/bootstrap/dist/js/bootstrap.js',
    text: 'libs/text/text'
  }
});

require([
  // Load our app module an pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});
