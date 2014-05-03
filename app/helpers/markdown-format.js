export default Ember.Handlebars.makeBoundHelper(function(val) {
  val = Ember.Handlebars.Utils.escapeExpression(val);
  return new Ember.Handlebars.SafeString(markdown.toHTML(val));
});
