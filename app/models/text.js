var Text = DS.Model.extend({
  title: DS.attr('string', {async: true}),
  text: DS.attr('string', {async: true}),
  createdAt: DS.attr('string', {
    defaultValue: function() {
      return new Date();
    }
  }),
  piles: DS.hasMany('pile')
});

Text.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: '1.',
      text: "<p>The path to Han-shan's place is laughable,</br>A path, but no sign of cart or horse.</br>Converging gorges - hard to trace their twists</br>Jumbled cliffs - unbelievably rugged.</br>A thousand grasses bend with dew,</br>A hill of pines hums in the wind.</br>And now I've lost the shortcut home,</br>Body asking shadow, how do you keep up?</p>",
      piles: [1]
    },
    {
      id: 2,
      title: '2.',
      text: "<p>In a tangle of cliffs, I chose a place -</br>Bird paths, but no trails for me.</br>What's beyond the yard?</br>White clouds clinging to vague rocks.</br>Now I've lived here - how many years -</br>Again and again, spring and winter pass.</br>Go tell families with silverware and cars</br>'What's the use of all that noise and money?'</p>",
      piles: [1]
    },
    {
      id: 3,
      title: '3.',
      text: "<p>In the mountains it's cold.</br>Always been cold, not just this year.</br>Jagged scarps forever snowed in</br>Woods in the dark ravines spitting mist.</br>Grass is still sprouting at the end of June,</br>Leaves begin to fall in early August.</br>And here I am, high on mountains,</br>Peering and peering, but I can't even see the sky.</p>",
      piles: [1]
    }
  ]
});

export default Text;
