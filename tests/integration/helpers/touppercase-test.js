
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('touppercase', 'helper:touppercase', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 'small');

  this.render(hbs`{{touppercase inputValue}}`);

  assert.equal(this.$().text().trim(), 'SMALL');
});

