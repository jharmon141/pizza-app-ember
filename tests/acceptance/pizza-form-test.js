import { test } from 'qunit';
import moduleForAcceptance from 'pizza-app-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pizza form');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});
