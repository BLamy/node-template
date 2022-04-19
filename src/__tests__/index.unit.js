import FooBar from "../";

describe("FooBar", () => {
  let fooBar;
  beforeEach(() => {
    fooBar = new FooBar("bar");
  });

  it("should export foo", () => {
    expect(fooBar.foo).toBe("foo");
  });

  it("should export bar", () => {
    expect(fooBar.bar).toBe("bar");
  });
});
