/* istanbul ignore next: this is only skipped in testing */
const { Router } = global.NAILS_TEST_EXPORT || require('node-nails');

module.exports = Router.draw(({ get, scope, ws }) => {
  get('', 'home');
  get('static/:path*', 'home.static');
  get('oh-noes', 'not-a-controller');
  scope('test', () => {
    get('badView');
    get('nada');
    get(':id(\\d+)', 'id');
    get('cookie');
    get('query');
    get('auth');
    get('go-away', 'goAway');
    scope('cache', () => {
      get('forever');
      get('no-cache', 'noCache');
      get('seconds/:seconds(\\d+)', 'seconds');
    });
  });
  scope('status', () => {
    ws('');
    get('/');
    get('json', {
      to: 'json',
    });
    get('view');
    get('redirect');
    get('ws');
  });
});
