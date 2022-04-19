export default class FooBar {
  #bar;

  constructor(bar) {
    this.#bar = bar;
  }

  get foo() {
    return "foo";
  }

  get bar() {
    return this.#bar;
  }
}
