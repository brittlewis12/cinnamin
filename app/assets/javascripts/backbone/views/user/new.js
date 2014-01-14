Cinnamin.Views.NewUser = Backbone.View.extend({
  template: _.template($("script#new-user").html()),

  events: {
    "submit": "submitted"
  },

  initialize: function() {
    __clog("NewUser View initialized!");
    this.render();
  },

  render: function() {
    __clog("NewUser View rendered!");
    this.$el.html(this.template());
  },

  submitted: function(e) {
    __clog("NewUser Form submitted!");
    e.preventDefault();

    var findInput = function(inputName) {
      var input = "input[name='" + inputName + "']";
      return this.$el.find(input).val();
    }.bind(this);

    var user = new Cinnamin.Models.User({
      email: findInput("email"),
      username: findInput("username"),
      password: findInput("password"),
      password_confirmation: findInput("password-confirmation") // snake case var name for Rails
    });

    user.save(null, {
      success: function(model, response, options) {
        __clog("User successfully created!");
        user.clear().set(response);
        console.log(user);
        this.$el.find("form.new-user")[0].reset();
        // Backbone.history.navigate(someRoute);
      },

      error: function(model, xhr, options) {
        __clog("User creation unsuccessful.");
        console.log(xhr);

        var error = new Cinnamin.Views.CreateUserError({
          error: xhr.responseText
        });
        error.$el.insertAfter($("h2.new-user"));
      }
    });
  }
});
