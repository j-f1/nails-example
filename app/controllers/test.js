exports.badView = function () {
  this.render({
    view: true,
  });
};

exports.nada = function () {};

exports.id = function () {
  this.render({
    text: this.params.id,
  });
};

exports.query = function () {
  this.render({
    json: this.query,
  });
};

exports.auth = function () {
  this.auth.enable({
    realm: 'test',
  });
  if (this.auth.check('nails', 'is awesome')) {
    this.render({
      text: 'You’re in: ' + this.headers.authorization.match(/^Basic (.+)$/)[1],
    });
  } else if (this.auth.invalid) {
    this.render({
      status: 401,
      text: 'Did you try nails:is awesome?',
    });
  } else {
    this.render({
      status: 401,
      text: 'Nope!',
    });
  }
};

exports.cookie = function () {
  let number = this.cookies.get('number', {
    signed: true,
  });
  if (!number) {
    number = (Math.random() * 10) | 0 + 1;
    this.cookies.set('number', number, {
      httpOnly: false,
      signed: true,
    });
  }
  this.render({}, `You are #${number}\n<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min.js"></script>`);
};
