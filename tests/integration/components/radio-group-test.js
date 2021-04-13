import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { focus, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | radio-group', function(hooks) {
  setupRenderingTest(hooks);

  test('keyboard navigation', async function(assert) {
    await render(hbs`<RadioGroup />`);
    await focus('#first-focus');
    await triggerKeyEvent('#first-focus', 'keydown', 'Tab');
    assert.dom('input[type="radio"]').isFocused();
  });
});
