export default Ember.Handlebars.makeBoundHelper( function(val) {
  //Ember.Handlebars.Utils.escapeExpression(val);
  return new Ember.Handlebars.SafeString(val);
});
