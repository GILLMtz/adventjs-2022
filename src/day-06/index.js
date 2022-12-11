function createCube(size) {
  const generatePattern = (s, size) => s.repeat(size);
  let i = size, j = 1;
  let cube = "";
  while (i > 0) {
    cube = cube + generatePattern(" ", i - 1) + generatePattern("/\\", j) + generatePattern("_\\", size) + "\n";
    i--; j++;
  }
  cube = cube + cube.split('\n').reverse()
    .slice(1).join('\n')
    .replace(/\/\\/g, "\\/")
    .replace(/_\\/g, "_/")
  return cube;
}






const cubeOfOne = createCube(1);
const cubeOfTwo = createCube(2);
const cubeOfthree = createCube(3);
const cubeOfTen = createCube(10);
console.log(cubeOfOne);
console.log('----')
console.log(cubeOfTwo);
console.log("--------")
console.log(cubeOfthree);
console.log("--------")
console.log(cubeOfTen);


module.exports = createCube;