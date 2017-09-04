import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cart-item', 'Integration | Component | cart item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('pizza', {
    size: "small",
    id: 1,
    basePrice: 12.360000000000001,
    total: 37.08000000005,
    maxNumberOfToppings: 3,
    quantity: 3,
    toppings: [
      {
        name: "banana peps",
        price: 0.89
      },
      {
        name: "sausage",
        price: 1.29
      },
      {
        name: "onion",
        price: 0.29,
      }
    ]
  });

  this.render(hbs`{{cart-item pizza=pizza}}`);

  assert.equal(this.$('h4').first().text().trim(), 'small', 'renders pizza size');
  assert.equal(this.$('.cartItem').length, 1, 'renders pizza toppings');
  assert.equal(this.$('h4').first().text().trim(), 'small', 'renders pizza size');
  assert.equal(this.$('.total').text().trim(), '$37.08', 'renders total');
  assert.equal(this.$('.delete').text().trim(), 'X', 'renders delete');
});
