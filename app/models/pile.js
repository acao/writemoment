var Pile = DS.Model.extend({
  label: DS.attr('string', {async: true}),
  createdAt: DS.attr('string', {
    defaultValue: function() {
      return new Date();
    }
  }),
});

Pile.reopenClass({
  FIXTURES: [
    {
      id: 1,
      label: 'Poetry'
    }
  ]
});

export default Pile;
