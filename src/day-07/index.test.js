const getGiftsToRefill = require("./index");

it('should be  ["muñeca", "pc"]', () => {
    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']

    const result=getGiftsToRefill(a1,a2,a3);
    expect(new Set(result)).toEqual(new Set(['muñeca', 'pc']));
});