import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:home', 'Unit | Controller | home', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it handles size selection and form reset', function(assert) {
  let home = this.subject();
  let chosenPizza = {size: 'small', total: 10.00};
  home.send('selectPizza', chosenPizza);
  
  assert.equal(home.get('sizeChosen'), true, 'the sizeChosen boolean is set to true');
  assert.equal(home.get('pizza'), chosenPizza, 'the correct pizza is chosen');

  home.send('resetForm');
  assert.equal(home.get('sizeChosen'), false, 'the form resets');
});
