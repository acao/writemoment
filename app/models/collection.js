var Collection = DS.Model.extend({
  label: DS.attr('string', {async: true}),
  type: DS.hasMany('collectionType'),
  createdAt: DS.attr('date', {
    defaultValue: function() {
      return new Date();
    }
  }),
});

Collection.reopenClass({
  FIXTURES: [
    {
      id: 1,
      label: 'On an Archipelago'
    }
  ]
});

export default Collection;
