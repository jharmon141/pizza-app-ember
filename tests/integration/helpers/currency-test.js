import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('currency', 'helper:currency', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 1.1);

  this.render(hbs`{{currency inputValue}}`);

  assert.equal(this.$().text().trim(), '$1.10');
});

