"use strict";

function getResult(a, b, c) {
    
    let x1,
        x2,
        result = [],
        D = Math.pow(b, 2) - 4 * a * c;    
    
    if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      x2 = (-b - Math.sqrt(D)) / (2 * a);
      result.push(x1, x2);
      return result;
    } else if (D === 0) {
      x1 = -b / (2 * a);
      result.push(x1);
      return result;
    } else if (D < 0) {
      return result;
    }

}

function getAverageMark(marks) {

    if (marks.length === 0) return 0;

    let arrayMarks = marks,
        Sum = 0,
        arrayMarksLength = arrayMarks.length;

    if (arrayMarksLength > 5) {
        console.log("Количество оценок больше пяти.");
        arrayMarks = arrayMarks.slice(0, 5);
        arrayMarksLength = 5;
    }

    for (let i = 0; i < arrayMarksLength; i++) {
        Sum += arrayMarks[i];
    }    

    return Sum / arrayMarksLength;

}

function askDrink(name, dateOfBirthday) {
    let yourAge,
        currentDate = new Date(),
        currentYear = currentDate.getFullYear(),
        result;

    yourAge = currentYear - dateOfBirthday.getFullYear();

    result = (yourAge > 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        
    return result;

}