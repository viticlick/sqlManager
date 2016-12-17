// Filename: boilerplate.js

define([
  'jquery',
  'underscore',
  'backbone',
  'text!/templates/commons/navbar.html'
], function($,_,Backbone,navBarTemplate){
  var NavBarView = Backbone.View.extend({
    el: $('#menu'),

    render: function(){
      compiledTemplate = _.template(navBarTemplate);
      this.$el.append(compiledTemplate);
    }

  });
  return NavBarView;
});
