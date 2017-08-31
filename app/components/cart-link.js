import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  actions: {
    handleResetForm() {
      this.sendAction('resetForm');
    }
  }
});
