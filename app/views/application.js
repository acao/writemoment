var ApplicationView = Em.View.extend({
  initBootstrap: function () {
        Ember.$(document).bootstrap();
    }.on('didInsertElement')
});

export default ApplicationView;
