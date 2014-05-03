var TextsController = Ember.ArrayController.extend({
  actions: {
    save: function(title, values) {
      var model = this.get('content');

      if ( title && values ) {
        values = stringify(values);
        model.set(title, values);
      }
      //console.log('you cant save me');
    Ember.run.debounce(model, 'save', 100);
    }
  }
});

function stringify(values) {
  if (values instanceof Array) {
    values = values.map(function(value) {
      return value.toString();
    });
  } else {
    values = values.toString();
  }

  return values;
}

export default TextsController;
