var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('texts', { path: '/texts/:text_id' }, function() {
    this.route('edit');
    this.route('new');
  });
  this.resource('piles', function() {
    this.route('new');
  });
  this.resource('pile', { path: '/pile/:pile_id' });

});

export default Router;
