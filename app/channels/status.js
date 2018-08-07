/* istanbul ignore next: this is only skipped in testing */
const nails = global.NAILS_TEST_EXPORT || require('node-nails');

exports.index = class Channel extends nails.Channel {
  constructor(...args) {
    super(...args);
    this._send = this._send.bind(this);
    process.nextTick(this._send);
    setInterval(this._send, 500);
  }

  _send() {
    this.socket.send(this.pickRandom('ok', '👍', '⚠', '🚨'));
  }

  pickRandom(...arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};
