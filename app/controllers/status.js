exports.index = function () {
  this.render({ text: "status ok" });
};

exports.json = function () {
  this.render({ json: { this: 'renders', as: 'json' } });
};

exports.view = function () {
  this.render({ view: true, locals: { text: 'hi' } });
};

exports.redirect = function () {
  this.redirect('/status');
};
