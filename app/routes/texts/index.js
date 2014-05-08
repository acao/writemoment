var TextIndexRoute = Ember.Route.extend({
  model: function(params){
  return this.store.find('text');
  }
});

export default TextIndexRoute;
