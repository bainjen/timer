
  

const input = process.argv.slice(2);

const timers = (input) => {
  for (const elem of input) {
    if (elem < 0 || isNaN(elem || elem === undefined)) {
      return
    } else {
      let timer = elem * 1000
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer); 
    }
  }
}
timers(input);





// console.log(integersOnly);

// console.log(onlyNumsArray);
// console.log(checkForInteger(input));

// const numsOnly = input.filter(elem => elem.isInteger(Number(elem)) === true);
// console.log(numsOnly);

//++++INSTRUCTIONS++++
// Implement an alarm clock / timer which will beep after a specified amount of time has passed.The user can specify an unlimited number of alarms using command line arguments

//++++EDGE CASES TO TEST++++

// 1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// 2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// 3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

  
//   //convert input to numbers, if possible
//   const makeNum = input.map(elem => Number(elem));
//   // console.log(makeNum);
  
//   //filter out NaN values
//   const numsOnlyArr = makeNum.filter(elem => {
//     return Number.isInteger(elem);
//   })
//   // console.log(numsOnlyArr);
  
//   //sort numbers from small to large
//   const sortedNums = numsOnlyArr.sort((b, a) => b - a);
//   console.log(sortedNums);
  
// const timer = (input) => {
//   for (let num of sortedNums) {
//     const time = num * 1000;
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, time)
//   }
// }
// timer(input);