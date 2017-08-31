import Ember from 'ember';

export function currency([item]) {
  return item.toFixed(2);
}

export default Ember.Helper.helper(currency);
