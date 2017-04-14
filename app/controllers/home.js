exports = module.exports = function () {
  this.render('<h1>Hi!!1</h1>');
};

exports.static = function () {
  const components = (this.params.path || '').split('/');
  if (components[components.length - 1] === '') {
    components[components.length - 1] = 'index.html';
  }
  this.stream({
    path: this.static(...components),
  });
};
