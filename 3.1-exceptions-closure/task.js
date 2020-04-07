"use strict";

// task 1
function parseCount(userData) {
  const transformData = Number.parseInt(userData);

  if (isNaN(transformData)) {
    throw new Error("Невалидное значение");
  }

  return transformData;
}

// console.log(parseCount(NaN));

function validateCount(userData) {
  try {   
    return parseCount(userData);   
  } catch (e) {
    return e;
  }
}

// console.log(validateCount(NaN));


// task 2

// task 2.1
class Triangle {
  constructor(firstParty, secondParty, thirdParty) {
    this.firstParty = firstParty;
    this.secondParty = secondParty;
    this.thirdParty = thirdParty;

    if (
      this.firstParty > this.secondParty + this.thirdParty ||
      this.secondParty > this.firstParty + this.thirdParty ||
      this.thirdParty > this.firstParty + this.secondParty
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.firstParty + this.secondParty + this.thirdParty;
  }

  getArea() {
   const halfPerimeter = this.getPerimeter() / 2;
   return +(Math.sqrt(
     halfPerimeter *
     (halfPerimeter - this.firstParty) *
     (halfPerimeter - this.secondParty) *
     (halfPerimeter - this.thirdParty)
   )).toFixed(3);
  }

}

// task 2.2
function getTriangle(firstParty, secondParty, thirdParty) {

  try {
   return new Triangle (firstParty, secondParty, thirdParty);
  } catch {  

   return {
     getArea: () => "Ошибка! Неправильный треугольник",
     getPerimeter: () => "Ошибка! Неправильный треугольник"
   };

  }   
  
}
