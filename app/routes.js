/* istanbul ignore next: this is only skipped in testing */
const { Router } = global.NAILS_TEST_EXPORT || require('node-nails');

module.exports = Router.draw(({ scope }) => {
  scope('status', ({ get }) => {
    get('', 'status');
    get('param-switching', 'paramSwitching');
    get('json');
    get('view');
    get('redirect');
  });
});
