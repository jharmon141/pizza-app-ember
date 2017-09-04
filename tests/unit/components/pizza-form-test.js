import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('pizza-form', 'Unit | Component | pizza form', {
  // Specify the other units that are required for this test
  needs: ['service:cart', 'helper:currency'],
  unit: true
});

//things to test: 
//    selectQuantity: make sure quantity and grandTotal changes,
//    handleToppingChange: addTopping and removeTopping
//            -make sure that toppingsMax changes to true

test('it handles quantity change', function(assert) {

  // Creates the component instance
  const pizzaForm = this.subject();
  pizzaForm.set('pizza', {
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

  pizzaForm.send('initializeForm');
  assert.equal(pizzaForm.get('quantity'), 1, 'form initializes with quantity of 1');
  // pizzaForm.send('selectQuantity', '3');
  // // this.render();
  // assert.equal(pizzaForm.get('grandTotal'), 19.98, 'grandTotal recalculates');
  // assert.equal(pizzaForm.get('quantity'), 3, 'quantity changes correctly');
});
