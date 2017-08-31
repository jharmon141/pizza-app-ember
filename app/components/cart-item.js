import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),
  quantityNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  actions: {
    handleRemovePizza() {
      let pizza = this.get('pizza');
      this.get('cart').removePizza(pizza);
    },

    handleUpdateQuantity(event) {
      let newPizza = {};
      newPizza.id = this.get('pizza.id');
      newPizza.quantity = Number(event.target.value);
      newPizza.basePrice = this.get('pizza.basePrice');
      newPizza.total = this.get('pizza.basePrice') * newPizza.quantity;
      newPizza.size = this.get('pizza.size');
      newPizza.toppings = this.get('pizza.toppings');
      this.get('cart').updatePizza(newPizza);
    }
  }

});
