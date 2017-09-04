
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('if-in', 'helper:if-in', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 'bell peps');
  this.set('list', ['pepperoni', 'bell peps', 'cheese']);

  this.render(hbs`{{if-in inputValue list}}`);

  assert.equal(this.$().text().trim(), 'true', 'it returns true if item in list');

  this.set('inputValue', 'banana peps');

  this.render(hbs`{{if-in inputValue list}}`);

  assert.equal(this.$().text().trim(), 'false', 'it returns false if item not in list');
});

