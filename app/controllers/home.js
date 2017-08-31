import Ember from 'ember';

export default Ember.Controller.extend({
  sizeChosen: false,
  pizza: null,

  actions: {
    selectPizza(pizza) {
      this.set('pizza', pizza);
      this.set('sizeChosen', true);
    },

    resetForm() {
      this.set('sizeChosen', false);
      this.set('pizza', null);
    }
  }
});
