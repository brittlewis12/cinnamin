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

function __clog(string) {
  if (Cinnamin.debug) {
    console.log("〃⋰⋱⋰  " + string);
  }
}
