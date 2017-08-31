import Ember from 'ember';

export default Ember.Service.extend({
  pizzas: [],
  count: Ember.computed('pizzas', function() {
    let sum = 0;
    this.get('pizzas').forEach((pizza) => sum += pizza.quantity);
    return sum;
  }),
  empty: Ember.computed('pizzas', function() {
    if (this.get('count') === 0) {
      return true;
    } else {
      return false;
    }
  }),
  idCount: 0,
  total: Ember.computed('pizzas', function() {
    let sum = 0; 
    this.get('pizzas').forEach(pizza => {
      sum += pizza.total;
    });
    return sum;
  }),

  addPizza(pizza) {
    //give the pizza a new unique id
    let id = this.get('idCount') + 1;
    this.set('idCount', id);
    pizza.id = this.get('idCount');

    let newPizzas = [...this.get('pizzas'), pizza];
    this.set('pizzas', newPizzas);
  },

  removePizza(pizza) {
    let newPizzas = this.get('pizzas').filter((target) => target.id !== pizza.id);
    this.set('pizzas', newPizzas);
  },

  updatePizza(pizza) {
    let pizzaIndex = this.get('pizzas').findIndex((target) => target.id === pizza.id);
    let newPizzas = this.get('pizzas');
    newPizzas.splice(pizzaIndex, 1, pizza);
    this.set('pizzas', newPizzas);
  }
});
