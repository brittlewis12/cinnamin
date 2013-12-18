Cinnamin.Views.Index = Backbone.View.extend({
  el: "div.app",

  template: _.template($("script#index").html())

  initialize: function() {
    console.log("Index View initialized!");
    this.render();
  },

  render: function() {
    console.log("Index View rendered!")
    this.$el.html(this.template());
  }
});
