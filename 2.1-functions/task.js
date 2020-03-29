"use strict";


//task1

function getSolutions(a, b, c) {

  const D = Math.pow(b, 2) - 4 * a * c;
  let result;     

  if (D < 0) {
    result = {D: D, roots: []};
  }

  if (D === 0) {
    let x1 = -b / 2 * a;
    result = {D: D, roots: [x1]};
  }

  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a),
        x2 = (-b - Math.sqrt(D)) / (2 * a);
    result = {D: D, roots: [x1, x2]};
  }

  return result;

}


function showSolutionsMessage(a, b, c) {
  
  const result = getSolutions(a, b, c);
  let resultMessage = "";

  console.log(`Вычисляем корни квадратного уравнения ${a}x² = ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  
  if (result.roots.length === 0) {
    resultMessage = "Уравнение не имеет вещественных корней";
  }

  if (result.roots.length === 1) {
    resultMessage = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
  }

  if (result.roots.length === 2) {
    resultMessage = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
  }

  console.log(resultMessage);
 
}


// task 2
function getAverageScore(data) {

  let averageData = {};
  let averageMarksArray = [];

  if (Object.keys(data).length < 10) {
    console.log("Количество предметов меньше десяти.");
  }
  
  for (let subjectName in data) {
    let averageMark = getAverageMark(data[subjectName]);
    averageData[subjectName] = averageMark;
    averageMarksArray.push(averageMark);
  }

  averageData.average = getAverageMark(averageMarksArray);

  return averageData;
 
}

function getAverageMark(marks) {

  let sum = 0;
  let result = 0;

  for (let item of marks) {
    sum += item;
  }

  if (Array.isArray(marks) && marks.length > 0) {
    result = sum / marks.length;
  }

  return result;

}


// task 3
function getPersonData(secretData) {  

  return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};
  
}

function getDecodedValue(secret) {  

  return secret ? "Эмильо" : "Родриго";

}

console.log(getPersonData({ aaa: 0, bbb: 0 }));
console.log(getPersonData({ aaa: 1, bbb: 0 }));
console.log(getPersonData({ aaa: 0, bbb: 1 }));
console.log(getPersonData({ aaa: 1, bbb: 1 }));