Cinnamin.Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    new Cinnamin.Views.Index();
  }
});
