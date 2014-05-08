var CollectionType = DS.Model.extend({
  label: DS.attr('string', {async: true}),
  type: DS.belongsTo('collection'),
  createdAt: DS.attr('date', {
    defaultValue: function() {
      return new Date();
    }
  }),
});

CollectionType.reopenClass({
  FIXTURES: [
    {
      id: 1,
      label: 'Chapbook'
    }
  ]
});

export default CollectionType;
