import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('size-menu', 'Integration | Component | size menu', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('pizzaSizes', 
    [{
      name: "small",
      basePrice: 9.89,
      maxNumberOfToppings: 3,
      __typename: "pizzaSize"
    },
      {
        name: "medium",
        basePrice: 10.89,
        maxNumberOfToppings: 5,
        __typename: "pizzaSize"
      },
      {
        name: "large",
        basePrice: 13.49,
        maxNumberOfToppings: null,
        __typename: "pizzaSize"
      }
    ]);

  this.render(hbs`{{size-menu pizzaSizes=pizzaSizes}}`);

  assert.equal(this.$('.select').find('option:selected').text().trim(), 'SMALL', 'it renders initial select option');

  this.$('.select').change();
  this.$('.select').val('medium');
  assert.equal(this.$('.select').find('option:selected').text().trim(), 'MEDIUM', 'it renders choosen select option');

});
