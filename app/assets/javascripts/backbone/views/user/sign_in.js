Cinnamin.Views.SignIn = Backbone.View.extend({
  template: _.template($("script#sign-in").html()),

  events: {
    "submit": "submitted"
  },

  initialize: function() {
    __clog("SignIn View initialized!");
    this.render();
  },

  render: function() {
    __clog("SignIn View rendered!");
    this.$el.html(this.template());
  },

  submitted: function(e) {
    __clog("SingIn Form submitted!");
    e.preventDefault();

    var findInput = function(inputName) {
      var input = "input[name='" + inputName + "']";
      return this.$el.find(input).val();
    }.bind(this);

    var email = findInput("email");
    var username = findInput("username");
    var password = findInput("password");
  }
});
