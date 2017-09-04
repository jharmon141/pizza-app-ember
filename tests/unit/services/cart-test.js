import { moduleFor, test } from 'ember-qunit';

moduleFor('service:cart', 'Unit | Service | cart', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  unit: true
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let cart = this.subject();
  assert.ok(cart);
});

test('it calculates computed properties', function(assert) {
  let cartPizzas = [
    {
      basePrice: 12.170000000000002,
      id: 1,
      size: 'small',
      toppings: [{name: 'cheese', price: 0.1},{name: 'banana peps', price: 0.89},{name:'sausage', price: 1.29}],
      total: 12.170000000000002,
      quantity: 1
    },
    {
      basePrice: 12.969999999999999,
      id: 2,
      size: 'medium',
      toppings: [{name: 'pepperoni', price: 0.4}, {name: 'cheese', price: 0.1},{name: 'onion', price: 0.29},{name:'sausage', price: 1.29}],
      total: 25.939999999999998,
      quantity: 2
    },
    {
      basePrice: 16.46,
      id: 3,
      size: 'large',
      toppings: [{name: 'pepperoni', price: 0.4}, {name: 'banana peps', price: 0.89}, {name: 'cheese', price: 0.1},{name: 'onion', price: 0.29},{name:'sausage', price: 1.29}],
      total: 49.38,
      quantity: 3
    }
  ];

  const cart = this.subject();
  cart.set('pizzas', cartPizzas);

  //test computed properties
  assert.equal(cart.get('count'), 6, 'it calculates cart count'); 
  assert.equal(cart.get('empty'), false, 'it calculates empty boolean'); 
  assert.equal(cart.get('total'), 87.49000000000001, 'it calculates cart total'); 
});

test('it handles methods correctly', function(assert) {
  let cartPizzas = [
    {
      basePrice: 12.170000000000002,
      id: 1,
      size: 'small',
      toppings: [{name: 'cheese', price: 0.1},{name: 'banana peps', price: 0.89},{name:'sausage', price: 1.29}],
      total: 12.170000000000002,
      quantity: 1
    },
    {
      basePrice: 12.969999999999999,
      id: 2,
      size: 'medium',
      toppings: [{name: 'pepperoni', price: 0.4}, {name: 'cheese', price: 0.1},{name: 'onion', price: 0.29},{name:'sausage', price: 1.29}],
      total: 25.939999999999998,
      quantity: 2
    },
    {
      basePrice: 16.46,
      id: 3,
      size: 'large',
      toppings: [{name: 'pepperoni', price: 0.4}, {name: 'banana peps', price: 0.89}, {name: 'cheese', price: 0.1},{name: 'onion', price: 0.29},{name:'sausage', price: 1.29}],
      total: 49.38,
      quantity: 3
    }
  ];

  const cart = this.subject();
  cart.set('pizzas', cartPizzas);

  //test add pizza
  let pizzaToAdd = {
    basePrice: 11.28,
    id: 4,
    size: 'small',
    toppings: [{name: 'cheese', price: 0.1}, {name:'sausage', price: 1.29}],
    total: 22.56,
    quantity: 2
  };

  cart.addPizza(pizzaToAdd);
  assert.equal(cart.get('count'), 8, 'it calculates cart count when pizza is added'); 
  assert.equal(cart.get('total'), 110.05000000000001, 'it calculates cart total when pizza is added'); 

  //test remove pizza
  let pizzaToDelete = {
    basePrice: 12.170000000000002,
    id: 1,
    size: 'small',
    toppings: [{name: 'cheese', price: 0.1},{name: 'banana peps', price: 0.89},{name:'sausage', price: 1.29}],
    total: 12.170000000000002,
    quantity: 1
  };

  cart.removePizza(pizzaToDelete);
  assert.equal(cart.get('count'), 5, 'it calculates cart count when pizza is removed'); 
  assert.equal(cart.get('total'), 75.32, 'it calculates cart total when pizza is removed'); 

  //test update pizza
  let pizzaToUpdate = {
    basePrice: 12.969999999999999,
    id: 2,
    size: 'medium',
    toppings: [{name: 'pepperoni', price: 0.4}, {name: 'cheese', price: 0.1},{name: 'onion', price: 0.29},{name:'sausage', price: 1.29}],
    total: 12.969999999999999,
    quantity: 1
  };

  cart.updatePizza(pizzaToUpdate);
  assert.equal(cart.get('count'), 4, 'it calculates cart count when pizza is updated'); 
  assert.equal(cart.get('total'), 62.35, 'it calculates cart total when pizza is updated'); 
});
