var TextEditController = Ember.ObjectController.extend({
  actions: {
        update: function(model) {
          console.log(this.content);
            this.content.save();
        }
    }
});

export default TextEditController;
