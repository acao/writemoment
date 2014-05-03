var PileRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('pile', 1);
  }
});

export default PileRoute;
