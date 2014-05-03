var TextsRoute = Ember.Route.extend({
  actions: {
    save: function(title, values) {
      var model = this.get('content');

      if ( title && values ) {
        values = stringify(values);
        model.set(title, values);
      }
      console.log('you cant save me');
    Ember.run.debounce(model, 'save', 100);
    }
  }
});

export default TextsRoute;
