Cinnamin = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new Cinnamin.Routers.Router();
    Backbone.history.start();
  },
  debug: true
}

__clog = function(string) {
  if (Cinnamin.debug) {
    console.log("〃⋰⋱⋰  " + string);
  }
}
