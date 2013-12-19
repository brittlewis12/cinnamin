Cinnamin.Models.User = Backbone.Model.extend({
  url: '/users',

  toJSON: function() {
    return {user: this.attributes}
  }
});
