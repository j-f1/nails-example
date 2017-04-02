exports.badView = function () {
  this.render({
    view: true
  });
};

exports.nada = function () {};

exports.id = function () {
  this.render({
    text: this.params.id
  });
};
