Cinnamin.Views.Group = Backbone.View.extend({
  tagName: "div",

  className: "group",

  template: _.template($("script#group").html()),

  initialize: function() {
    console.log("Group View initialized!")
    this.render();
  },

  render: function() {
    console.log("Group View rendered!")
    var compiled = this.template(this.model.toJSON());
    this.$el.html(compiled);
  }
});
