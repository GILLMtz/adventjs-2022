const countTime=require("./index");

it('should 7 ', () => {
    const leds = [0, 1, 1, 0, 1];
    expect(countTime(leds)).toBe(7);
});

it('should 21 ', () => {
    const leds = [0, 0, 0, 1];
    expect(countTime(leds)).toBe(21);
});

it('should 28 ', () => {
    const leds = [0, 0, 1, 0, 0];
    expect(countTime(leds)).toBe(28);
});
///
it('should 28 [1, 1, 0, 0, 0, 0]', () => {
    const leds = [1, 1, 0, 0, 0, 0];
    expect(countTime(leds)).toBe(28);
});
it('should 14 [1, 0, 0, 1, 0, 0] ', () => {
    const leds = [1, 0, 0, 1, 0, 0];
    expect(countTime(leds)).toBe(14);
});