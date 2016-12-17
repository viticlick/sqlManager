// Filename: views/queries/thumbnail.js

define([
  'jquery',
  'underscore',
  'backbone',
  'models/query',
  'text!/templates/queries/thumbnail.html'
], function($,_,Backbone,QueryModel,thumbnailTemplate){
  var ThumbnailView = Backbone.View.extend({
    el:$('#content'),

    initialize: function(options){
      if( options && options.model){
        this.model = options.model; 
      }else{
        this.model = new QueryModel;
      }
    },

    render: function(){
      var data = {
        model: this.model
      };
      compiledTemplate = _.template(thumbnailTemplate)(data);
      this.$el.html(compiledTemplate);
    }
  });
  return ThumbnailView;
});
