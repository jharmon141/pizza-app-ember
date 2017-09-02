import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.send('resetForm');
    }
  },

  model() {
    return [{
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
    },
      {
        name: "medium",
        basePrice: 10.89,
        maxNumberOfToppings: 5,
        toppings: [
          {
            defaultSelected: true,
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
      },
      {
        name: "large",
        basePrice: 13.49,
        maxNumberOfToppings: null,
        toppings: [
          {
            defaultSelected: true,
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
      }
    ]
  }
});
