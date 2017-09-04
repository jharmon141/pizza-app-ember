
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eq', 'helper:eq', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 4);

  this.render(hbs`{{eq inputValue 4}}`);

  assert.equal(this.$().text().trim(), 'true', 'it returns true when both args are equal');

  this.set('inputValue', 5);

  this.render(hbs`{{eq inputValue 4}}`);

  assert.equal(this.$().text().trim(), 'false', 'it returns false when both args are not equal');
});

