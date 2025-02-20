import multiply from "./multiplier.js";

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiply(3, 2)).toEqual(6);
  });
});


