import Ember from 'ember';

export default Ember.Component.extend({
  selectedSize: 'small',

  actions: {
    handleSelectSize(pizza) {
      this.set('selectedSize', pizza);
    },

    submitSize() {
      let chosenPizza = this.get('pizzaSizes').find((size) => size.name === this.get('selectedSize'));
      this.sendAction('selectPizza', chosenPizza);
    }
  }
});
