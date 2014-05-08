var TextEditorComponent = Ember.Component.extend({
  tagName: 'div',
  classNames: 'redactor-editor-typewriter',
  init: function() {
    this._super();

    this.on("focusOut", this, this._elementValueDidChange);
    this.on("change", this, this._elementValueDidChange );
    this.on("paste", this, this._elementValueDidChange);
    this.on("cut", this, this._elementValueDidChange);
    this.on("input", this, this._elementValueDidChange);
  },
  _updateElementValue: Ember.observer(function() {
    var $el, value;
    value = Ember.get(this, "value");
    $el = this.$().context;
    if ($el && value !== $el.innerHTML) {
      return $el.innerHTML = value;
    }
  }, "value"),
  _elementValueDidChange: function() {
    var $el;
    $el = this.$().context;
    return Ember.set(this, "value", $el.innerHTML);
  },
  didInsertElement: function() {
    this.$().redactor({
      minHeight: 300,
      air: true,
      airButtons: ['formatting', 'bold', 'italic', 'deleted'],
      tabSpaces: 4
    });
    this._updateElementValue();
  }
});

export default TextEditorComponent;
