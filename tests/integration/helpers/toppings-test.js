import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('toppings', 'helper:toppings', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('item', {name: 'sausage'});
  this.set('list', [{name: 'pepperoni'}, {name: 'cheese'}, {name: 'bell peps'}, {name: 'sausage'}]);

  this.render(hbs`{{toppings item list}}`);

  assert.equal(this.$().text().trim(), 'sausage', 'it should render without a comma if item is last in list');

  this.set('item', {name: 'pepperoni'});

  this.render(hbs`{{toppings item list}}`);

  assert.equal(this.$().text().trim(), 'pepperoni,', 'it should render with a comma if item is not last in list');
});

