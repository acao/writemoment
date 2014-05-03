export default Ember.Route.extend({
  model: function(params){
    return this.store.findAll('text');
  },
  actions : {
    createText: function() {
      var route = this,
          text = this.store.createRecord( 'text' );
        console.log(text);
        text.set('title', 'title');
        text.set('text', 'text');
        text.save().then( function( text ) {
          route.transitionTo( 'text', text );
      });
    }
  }
});
