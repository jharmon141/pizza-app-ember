import Ember from 'ember';

export function ifOut([item, list]) {
  if(list.includes(item)) {
    return false;
  }
  return true;
}

export default Ember.Helper.helper(ifOut);
