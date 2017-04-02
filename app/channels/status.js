const nails = require('node-nails');

exports = module.exports = class Channel extends nails.Channel {
  constructor(...args) {
    super(...args);
    setInterval(() => {
      this.socket.send(this.pickRandom('ok', '👍', '⚠', '🚨'));
    }, 500);
  }
  pickRandom(...arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};
