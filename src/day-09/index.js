function countTime(leds) {
  let seconds = 0, index = leds.indexOf(0), ledsSize = leds.length;
  const turnOn=index=>(leds[index - 1] == 1 && leds[index] == 0)
  || (leds[index] == 0 && leds[ledsSize - 1] == 1);
  while (leds.includes(0)) {  
    if (turnOn(index)) {//turn on 
      leds[index] = 1;
      index = (leds[index + 1] == 0) ? leds.indexOf(1, index + 1) : index;
    }
    seconds = (index == -1 || !leds.includes(0)) ? seconds + 7 : seconds;
    index = leds.indexOf(0, index + 1);
  }
  return seconds;
}

module.exports = countTime;