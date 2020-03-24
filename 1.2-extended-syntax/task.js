"use strict";

function getResult(a, b, c) {
    
    let x1,
        x2,
        result = [],
        discriminant = Math.pow(b, 2) - 4 * a * c;    
    
    if (discriminant > 0) {
      x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      result.push(x1, x2);      
    } else if (discriminant === 0) {
      x1 = -b / (2 * a);
      result.push(x1);      
    }

    return result;

}

function getAverageMark(marks) {

    if (marks.length === 0) return 0;

    let arrayMarks = marks,
        sum = 0,
        arrayMarksLength = arrayMarks.length;

    if (arrayMarksLength > 5) {
        console.log("Количество оценок больше пяти.");
        arrayMarks = arrayMarks.slice(0, 5);
        arrayMarksLength = 5;
    }

    for (let i = 0; i < arrayMarksLength; i++) {
        sum += arrayMarks[i];
    }    

    return sum / arrayMarksLength;

}

function askDrink(name, dateOfBirthday) {
    let yourAge,
        currentDate = new Date(),
        currentYear = currentDate.getFullYear();        

    yourAge = currentYear - dateOfBirthday.getFullYear();
        
    return yourAge > 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

}