function fitsInOneBox(boxes) {
    if(boxes.length==0){return false;}
    let previousBox = { l: -1, w: -1, h: -1 };
    return boxes.sort((b1, b2) => b1.l - b2.l)
      .every(box => {
        if (!(previousBox.w < box.w) || !(previousBox.h < box.h)) {
          return false;
        }
        previousBox = box;
        return true;
      });
  }
 
const boxes_1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
];

const boxes_2 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
];

const boxes_3 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
];

const boxes_4 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 }
];

[boxes_1, boxes_2, boxes_3, boxes_4].forEach(b => console.log(b));
console.log("\n");

console.log("expected: true | ", "actual: ", fitsInOneBox(boxes_1)) // true
console.log("expected: false| ", "actual: ", fitsInOneBox(boxes_2)) //false
console.log("expected: true | ", "actual: ", fitsInOneBox(boxes_3)) // true
console.log("expected: false | ", "actual: ", fitsInOneBox(boxes_4)) // false
console.log("expected: false| ", "actual: ", fitsInOneBox([])) // false