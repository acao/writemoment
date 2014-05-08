var TextEditRoute = Ember.Route.extend({
     actions: {
        update: function(model) {
          console.log(this.content);
            this.content.save();
        }
    }
});

export default TextEditRoute;
