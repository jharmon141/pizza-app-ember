import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),
  quantityNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  submitted: false,
  pickedToppings: [],
  toppingsMax: false ,
  quantity: 1,
  maxNumberOfToppings: 0,
  total: 0,
  grandTotal: 0,

  init() {
    this._super(...arguments);
    this.send('initializeForm');
  },

  actions: {
    handleAddToCart() {
      let pizza = {};
      pizza.size = this.get('pizza.name');
      pizza.toppings = this.get('pickedToppings');
      pizza.basePrice = this.get('total');
      pizza.quantity = this.get('quantity');
      pizza.total = pizza.basePrice * pizza.quantity;

      this.get('cart').addPizza(pizza);
      this.set('submitted', true);
    },

    handleToppingChange(topping) {
      this.get('pickedToppings').includes(topping) ? this.send('removeTopping', topping) : this.send('addTopping', topping);
    },

    updateTotal(change, amount) {
      if (change === 'add') {
        let toppingPrice = Number(amount);
        let beginTotal = Number(this.get('total'));
        let newTotal = (beginTotal + toppingPrice); 
        this.setProperties({
          total: newTotal,
          grandTotal: newTotal * this.get('quantity')
        });
      }
      else if (change === 'subtract') {
        let toppingPrice = Number(amount);
        let beginTotal = Number(this.get('total'));
        let newTotal = (beginTotal - toppingPrice); 
        this.setProperties({
          total: newTotal,
          grandTotal: newTotal * this.get('quantity')
        });
      }
    },

    selectQuantity(event) {
      this.setProperties({
        quantity: Number(event.target.value),
        grandTotal: this.get('total') * event.target.value
      });
    },

    checkMaxToppings(toppings, max) {
      if (toppings.length === max) {
        this.set('toppingsMax',  true);
      }
      if (toppings.length < max) {
        this.set('toppingsMax',  false);
      }
    },

    addTopping(topping) {
      let newToppings = this.get('pickedToppings').concat(topping);
      this.set('pickedToppings',  newToppings);
      this.send('updateTotal', 'add', topping.price);
      this.send('checkMaxToppings', newToppings, this.get('pizza.maxNumberOfToppings'));
    },

    removeTopping(topping) {
      let newToppings = this.get('pickedToppings').filter(each => {
        return each !== topping;
      });
      this.set('pickedToppings',  newToppings);
      this.send('updateTotal', 'subtract', topping.price);
      this.send('checkMaxToppings', newToppings, this.get('pizza.maxNumberOfToppings'));
    },

    handleResetForm() {
      this.sendAction('resetForm');
    },

    initializeForm() {
      let defaultToppings = [];
      let sum = this.get('pizza.basePrice');
      this.get('pizza').toppings.forEach(topping => {
        if (topping.defaultSelected) {
          defaultToppings.push(topping.topping);
          sum += topping.topping.price;
        }
      })
      this.setProperties({
        total: sum,
        grandTotal: sum,
        pickedToppings: defaultToppings
      });
      if (this.get('pizza').maxNumberOfToppings !== null) {
        this.set('maxNumberOfToppings',  this.get('pizza.maxNumberOfToppings'));
      } else {
        this.set('maxNumberOfToppings',  'Unlimited!');
      };
    }
  }
});
