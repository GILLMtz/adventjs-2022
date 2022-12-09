/* gift_weight=gift_lenght
reindeer_max_weight=2*reindeer_name_lenght */

function distributeGifts(packOfGifts, reindeers) {
    return Math.trunc(reindeers.join('').length * 2 / packOfGifts.join('').length);
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

const packages = distributeGifts(packOfGifts, reindeers) // 2
console.log(packages);