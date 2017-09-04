import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cart-link', 'Integration | Component | cart link', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('cart', {count: 3});
  this.render(hbs`{{cart-link cart=cart}}`);

  assert.equal(this.$().text().trim(), '(3)Cart', 'it renders the cart count');

});
