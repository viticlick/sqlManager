// Filename: models/query.js

define([
  'jquery',
  'underscore',
  'backbone'
], function($,_,Backbone){

  var Query = Backbone.Model.extend({

    urlRoot: '/queries',
    idAttribute: '_id',
          
    defaults: {
      'title':'',
      'query' : '',
      'description': '',
      'tables':[],
      'schemas':[],
      'variables':[], // Se puede ampliar a {tipo,nombre}
      'columns':[], // Se puede ampliar
      'type':[],
      'tags': []
    },

    validate: function(attrs,options){
      if(attrs.title == "" ){
        return "title can't be empty";
      };
      if( attrs.query == ""){
        return "query can't be empty";
      }
    },
    
    
  });

  return Query;
});
