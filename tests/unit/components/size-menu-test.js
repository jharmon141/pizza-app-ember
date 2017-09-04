import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('size-menu', 'Unit | Component | size menu', {
  // Specify the other units that are required for this test
  // needs: ['component:home', 'helper:touppercase'],
  unit: true
});

test('it handles select size', function(assert) {

  // Creates the component instance
  let sizeMenu = this.subject();
  sizeMenu.send('handleSelectSize', 'medium');

  assert.equal(sizeMenu.get('selectedSize'), 'medium', 'the correct size is selected');
});
