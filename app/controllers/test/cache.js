exports.forever = function () {
  this.cache.forever();
  this.render({
    text: 'ok',
  });
};

exports.noCache = function () {
  this.cache.expires.now();
  this.render({
    text: 'ok',
  });
};

exports.seconds = function () {
  this.cache.expires.in(this.params.seconds * 1000);
  this.render({
    text: 'ok',
  });
};
