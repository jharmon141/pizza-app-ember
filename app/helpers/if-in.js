import Ember from 'ember';

export function ifIn([item, list]) {
  if(list.includes(item)) {
    return true;
  }
  return false;
}

export default Ember.Helper.helper(ifIn);
