var CollectionRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('collection', 1);
  }
});

export default CollectionRoute;
