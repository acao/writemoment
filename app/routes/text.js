var TextRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('text', params.text_id);
  },
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

export default TextRoute;
