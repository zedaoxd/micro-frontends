import { starFill, starEmpty, lupa } from "../src/constants";

describe("Constants", () => {
  it("should have the same values as the constants in the source code", () => {
    expect(starFill).toBe("http://localhost:3001/icons/star-fill.png");
    expect(starEmpty).toBe("http://localhost:3001/icons/star-empty.png");
    expect(lupa).toBe("http://localhost:3001/icons/lupa.png");
  });
});
