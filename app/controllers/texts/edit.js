var TextsEditController = Ember.ObjectController.extend({
    actions: {
        update: function(model) {
            this.content.save();
            this.transitionToRoute('index');
        }
    }
});

export default TextsEditController;
