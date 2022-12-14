function getGiftsToRefill(a1, a2, a3) {
    return [... (new Set([].concat(a1, a2, a3)))]
        .filter(gift =>
            (a1.includes(gift) && !(a2.includes(gift) || a3.includes(gift))) ||
            (a2.includes(gift) && !(a1.includes(gift) || a3.includes(gift))) ||
            (a3.includes(gift) && !(a1.includes(gift) || a2.includes(gift)))
        );
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
console.log(
    a1, a2, a3
);

console.log(getGiftsToRefill(a1, a2, a3));

module.exports = getGiftsToRefill;