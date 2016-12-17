// Filename: Router.js

define([
  'jquery',
  'underscore',
  'backbone',
  'views/commons/navbar',
  'views/queries/create',
  'views/queries/thumbnail'
], function($,_,Backbone,NavBarView,CreateQueryView,ThumbnailView){

  var AppRouter = Backbone.Router.extend({
    routes:{
      'queries'  : 'showQuery',
      'new-query': 'createQuery',
      '*actions' : 'defaultAction'
    }
  });

  var navBarView = new NavBarView;

  var initialize = function(){

    navBarView.render();

    var appRouter = new AppRouter;
    appRouter.on('route:showQuery',function(){
      var thumbnailView = new ThumbnailView;
      thumbnailView.render();
    });

    appRouter.on('route:createQuery',function(){
      var createQueryView = new CreateQueryView;
      createQueryView.render();
    });

    appRouter.on('route:defaultAction',function(actions){
      console.log('no action selected '+ actions);
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
