Cinnamin.Views.Index = Backbone.View.extend({
  el: "div.app",

  template: _.template($("script#index").html()),

  initialize: function() {
    __clog("Index View initialized!");
    this.render();
    var newUser = new Cinnamin.Views.NewUser();
    this.$el.append(newUser.el);
  },

  render: function() {
    __clog("Index View rendered!")
    this.$el.html(this.template());
  }
});
