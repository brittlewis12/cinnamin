Cinnamin.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "sessions/new": "signIn"
  },

  index: function() {
    __clog("Index Route triggered!");
    new Cinnamin.Views.Index();
  },

  signIn: function() {
    __clog("SignIn Route triggered");
    new Cinnamin.Views.SignIn();
  }
});
