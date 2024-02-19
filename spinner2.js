const spinner = function(charArray, startDelay, intervalSpeed, numLoops) {
  for (let loop = 0; loop < numLoops; loop++) { // added case for increasing number of loops with an extra for loop
    for (let index = 0; index < charArray.length; index++) {
      setTimeout(() => {
        process.stdout.write(`\r ${charArray[index]}   Processing, please wait...`);
      }, startDelay += intervalSpeed);
    }
  }
};
const spinnerArray = ["|", "/","-","\\"];
// const spinnerArray2 = ["1", "2","3","4","5","6","7","8","9","10"];
spinner(spinnerArray, 0, 100, 10);