import Ember from 'ember';

export function toppings([item, list]) {
  if (item.name === list.get('lastObject').name) {
    return item.name;
  } else {
    return item.name + ",";
  }
}

export default Ember.Helper.helper(toppings);
