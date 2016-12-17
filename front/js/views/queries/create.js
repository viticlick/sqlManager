// Filename: views/queries/create.js

define([
  'jquery',
  'underscore',
  'backbone',
  'models/query',
  'text!/templates/queries/create.html'
], function($,_,Backbone,QueryModel,templateCreateView){
  var CreateQueryView = Backbone.View.extend({
    
    el:$('#content'),

    events:{
      'click #newQuerySave' : 'createQuery',
      'click #newQueryReset': 'render',
    },

    template: _.template(templateCreateView),
  
    render: function(){
      this.$el.html(this.template);
    },
    
    createQuery: function(){
      var data = {
        title : $('#newQueryTitleInput').val(),
        description : $('#newQueryDescriptionInput').val(),
        query : $('#newQueryQueryInput').val(),
      };
      var model = new QueryModel(data);
      model.on("invalid", _.bind(this.invalidModel, this));
      console.log(model.attributes)
      model.save();
    },

    invalidModel: function(model,error){
      alert(error); 
    },
    

  });

  return CreateQueryView;
});
