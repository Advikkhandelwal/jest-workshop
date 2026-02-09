const { calculateFinalAmount } = require("../src/pricing");

test("throws error for invalid subtotal", () => {
  expect(() => calculateFinalAmount(-10)).toThrow("Invalid subtotal");
});

test("5% automatic discount applied", () => {
  expect(calculateFinalAmount(1000)).toBe(950);
});

test("SAVE10 gives 10% discount", () => {
  expect(calculateFinalAmount(400, "SAVE10")).toBe(360);
});


test("FLAT50 subtracts 50", () => {
  expect(calculateFinalAmount(300, "FLAT50")).toBe(250);
});

test("Invalid coupon throws error", () => {
  expect(() => calculateFinalAmount(500, "HELLO")).toThrow("Invalid Coupon");
});
