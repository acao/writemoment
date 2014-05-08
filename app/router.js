var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('texts', function() {
    this.route('edit', {path: "/:text_id"});
    this.route('new');
  });
  this.resource('collections', function() {
    this.route('new');
  });
  this.resource('collection', { path: '/collection/:collection_id' });

});

export default Router;
