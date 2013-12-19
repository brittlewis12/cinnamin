Cinnamin.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    __clog("Index Route triggered!");
    new Cinnamin.Views.Index();
  }
});
