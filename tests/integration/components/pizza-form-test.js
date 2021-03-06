import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pizza-form', 'Integration | Component | pizza form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('pizza', {
    name: "small",
    basePrice: 9.89,
    maxNumberOfToppings: 3,
    toppings: [
      {
        defaultSelected: false,
        topping: {
          name: "pepperoni",
          price: 0.4,
          __typename: "topping"
        },
        __typename: "pizzaToppingConnection"
      },
      {
        defaultSelected: false,
        topping: {
          name: "bannana peps",
          price: 0.89,
          __typename: "topping"
        },
        __typename: "pizzaToppingConnection"
      },
      {
        defaultSelected: false,
        topping: {
          name: "sausage",
          price: 1.29,
          __typename: "topping"
        },
        __typename: "pizzaToppingConnection"
      },
      {
        defaultSelected: false,
        topping: {
          name: "onion",
          price: 0.29,
          __typename: "topping"
        },
        __typename: "pizzaToppingConnection"
      },
      {
        defaultSelected: false,
        topping: {
          name: "green olives",
          price: 0.39,
          __typename: "topping"
        },
        __typename: "pizzaToppingConnection"
      },
      {
        defaultSelected: true,
        topping: {
          name: "cheese",
          price: 0.1,
          __typename: "topping"
        },
        __typename: "pizzaToppingConnection"
      },
      {
        defaultSelected: false,
        topping: {
          name: "bell peps",
          price: 0.22,
          __typename: "topping"
        },
        __typename: "pizzaToppingConnection"
      }
    ],
    __typename: "pizzaSize"
  });

  this.render(hbs`{{pizza-form pizza=pizza}}`);

  assert.equal(this.$('h2').text().trim(), 'Size: SMALL', 'title renders');
  assert.equal(this.$('h4').first().text().trim(), 'Base price: $9.89', 'base price renders');
  assert.equal(this.$('h5').first().text().trim(), 'Max number of toppings: 3', 'max toppings render');
  assert.equal(this.$('label').first().text().trim(), 'pepperoni ($0.40)', 'toppings render');
  assert.equal(this.$('.quantitySelect').find('option:selected').text().trim(), '1', 'quantity select renders');
  assert.equal(this.$('.total').text().trim(), 'Total: $9.99', 'total renders');
});
