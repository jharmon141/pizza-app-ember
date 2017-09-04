import { test } from 'qunit';
import moduleForAcceptance from 'pizza-app-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pizza cart');

test('visiting /cart', function(assert) {
  visit('/cart');

  andThen(function() {
    assert.equal(currentURL(), '/cart');
  });
});
