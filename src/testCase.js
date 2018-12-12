class TestCase {
  constructor(name, bundle, expected, skip=false, only=false) {
    this._name = name;
    this._bundle = bundle;
    this._expected = expected;
    this._skip = skip;
    this._only = only;
  }

  get name() { return this._name; }
  get bundle() { return this._bundle; }
  get expected() { return this._expected; }
  get skip() { return this._skip; }
  get only() { return this._only; }
}

module.exports = TestCase;