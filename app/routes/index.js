export default Ember.Route.extend({
  model: function(params){
    return this.store.findAll('text');
  },
  actions : {
    createText: function() {
      var route = this,
          text = this.store.createRecord('text' );
        console.log(text);
        text.set('title', 'This is a title')
            .set('text', 'A whole buncha text aint it')
            .save()
            .then( function( text ) {

            });
    }
  }
});
