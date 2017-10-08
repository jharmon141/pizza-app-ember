import Ember from 'ember';

export function ifIn([item, list]) {
  return list.includes(item)
}

export default Ember.Helper.helper(ifIn);
