function wrapping(gifts) {
  return gifts.map(g => {
    const wrap = "*".repeat(g.length + 2);
    return `${wrap}\n*${g}*\n${wrap}`;
  });
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)