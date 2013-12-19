Cinnamin.Views.NavLink = Backbone.View.extend({
  tagName: "li",

  template: _.template($("script#nav-link").html()),

  events: {
    "click": "navigate"
  },

  initialize: function() {
    __clog("NavLink View initialized!");
    this.render();
  },

  render: function() {
    __clog("NavLink View rendered!");
    var compiled = this.template(this.model.toJSON());
    this.$el.html(compiled);
  },

  navigate: function() {
    __clog("NavLink triggered navigate to '" + this.model.get('path') + "'!")
    Backbone.history.navigate(this.model.get('path'), {trigger: true});
  }
});
