export default Ember.Handlebars.makeBoundHelper(function(val, length) {
  if (val.length > length) {
    val = val.substr(1, length);
  }
  return new Ember.Handlebars.SafeString(val);
});
