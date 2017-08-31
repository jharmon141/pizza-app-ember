import Ember from 'ember';

export function toppings([item, list]) {
  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      return item.name;
    } else {
      return item.name + ",";
    }
  }
}

export default Ember.Helper.helper(toppings);
