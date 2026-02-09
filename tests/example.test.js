const { calculateFinalAmount } = require("../src/pricing");

test("Check for positive subtotal", () => {
  expect(() => calculateFinalAmount("123", "SAVE10")).toThrow(
    "Invalid subtotal"
  );
});


test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "FLAT50")).toThrow(
    "Invalid subtotal",
  );
});

test("No coupon, subtotal under 1000", () => {
  expect(calculateFinalAmount(500)).toBe(500);
});

test("5% automatic discount applied", () => {
  expect(calculateFinalAmount(1000)).toBe(950);
});


test("SAVE10 gives 10% discount", () => {
  expect(calculateFinalAmount(400, "SAVE10")).toBe(360);
});

test("SAVE10 fixed at 100", () => {
  expect(calculateFinalAmount(2000, "SAVE10")).toBe(1900);
});

test("FLAT50 subtracts 50", () => {
  expect(calculateFinalAmount(300, "FLAT50")).toBe(250);
});

test("Invalid coupon throws error", () => {
  expect(() => calculateFinalAmount(500, "HELLO")).toThrow("Invalid Coupon");
});
