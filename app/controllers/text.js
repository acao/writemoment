var TextController = Ember.ObjectController.extend({

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

export default TextController;
