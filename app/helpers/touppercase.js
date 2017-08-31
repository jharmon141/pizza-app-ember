import Ember from 'ember';

export function touppercase([item]) {
  return item.toUpperCase();
}

export default Ember.Helper.helper(touppercase);
