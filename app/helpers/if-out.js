import Ember from 'ember';

export function ifOut([item, list]) {
  return !list.includes(item)
}

export default Ember.Helper.helper(ifOut);
