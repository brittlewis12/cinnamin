Cinnamin.Views.Group = Backbone.View.extend({
  tagName: "div",

  className: "group",

  template: _.template($("script#group").html()),

  initialize: function() {
    __clog("Group View initialized!");
    this.render();
  },

  render: function() {
    __clog("Group View rendered!")
    var compiled = this.template(this.model.toJSON());
    this.$el.html(compiled);
  }
});
