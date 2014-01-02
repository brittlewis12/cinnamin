Cinnamin.Views.CreateUserError = Backbone.View.extend({
  className: "error",

  template: _.template($("script#new-user-error").html()),

  initialize: function(opts) {
    __clog("CreateUserError View initialized!");
    this.error = opts.error;
    this.render();
    this.timeoutRemove();
  },

  render: function() {
    __clog("CreateUserError View rendered!");
    var compiled = this.template({error: this.error});
    this.$el.html(compiled);
  },

  timeoutRemove: function() {
    __clog("timeoutRemove called; start counting down!");
    var self = this;
    setTimeout(function() {
      self.selfDestruct()
    }, 5000);
  },

  selfDestruct: function() {
    __clog("CreateUserError View is self-destructing.")
    this.undelegateEvents();
    this.$el.removeData().unbind();
    this.remove();
  }
});
