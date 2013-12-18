Cinnamin.Views.Message = Backbone.View.extend({
  tagName: "li",

  className: "message",

  template: _.template($("script#message").html()),

  initialize: function() {
    console.log("Message View initialized!");
    this.render();
  },

  render: function() {
    console.log("Message View rendered!");
    var compiled = this.template(this.model.toJSON());
    this.$el.html(compiled);
  }
});
