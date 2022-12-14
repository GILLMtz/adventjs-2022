function getGiftsToRefill(a1, a2, a3) {
    return [... (new Set([].concat(a1, a2, a3)))]
      .filter(gift => {
        let b1 = a1.includes(gift);
        let b2 = a2.includes(gift);
        let b3 = a3.includes(gift)
        return (b1 && !(b2 || b3)) ||
          (b2 && !(b1 || b3)) ||
          (b3 && !(b1 || b2))
      }
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