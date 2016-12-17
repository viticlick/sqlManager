// Filename: boilerplate.js

define([
  'jquery',
  'underscore',
  'backbone',
  'models/query'
], function($,_,Backbone,Query){

  var QueryCollection = Backbone.Collection.extend({
    model: Query
  });

  return QueryCollection;
});
