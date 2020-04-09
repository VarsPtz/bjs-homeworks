"user strict";

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.  
  sleep(500); // Можно использовать другое значение замедления.
  // console.log("Функция вызвана не из памяти");
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((item) => arr1.indexOf(item) === arr2.indexOf(item))
  );
}

function memorize(fn, limit) {

  const memory = [];

  return (...argument) => {  

   const searchInMemory = memory.find((item) =>
     compareArrays(item.args, Array.from(argument))
   );

   if (searchInMemory) {
     // console.log("Результат берётся из памяти.");
     return searchInMemory.result;
   }

   const result = fn(...argument);   
   memory.push({ args: Array.from(argument), result: result });
   if (memory.length > limit) memory.shift();
   console.log("result from function memorize()");
   return result;
    
  };
   
}

function testCase(testFunction, timerName) {
  console.time(timerName);
  for (let i = 0; i < 101; i++) {
    array.forEach((item) => {
      testFunction(...item);
    });
  }
  console.timerEnd(timeName);
}

const newArray = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3],
  [1, 2],
  [9, 5, 2, 4],
];

// testCase(sum, "sum");
// testCase(memorize, "memorize");
// Результат выполнения testCase(sum, "sum") с задержкой 253186мс, без задержки 1.6мс
// Результат выполнения testCase(memorize, "memorize") с задержкой 1.2мс, без задержки 1.05мс
// Функция memorize отрабатывает быстрее!

// testCase ver.2
// function testCase(testFunction) {
//   return (...arg) => {
//     const timeStart = performance.now();
//     let z = testFunction(...arg);
//     const timeEnd = performance.now();
//     return timeEnd - timeStart - 500;
//   };
// }

// let newFunc = testCase(sum);
// console.log(newFunc(1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6));