export default Ember.Handlebars.makeBoundHelper(function(val) {
  return '<span class="label">' + val + '</span>';
});
