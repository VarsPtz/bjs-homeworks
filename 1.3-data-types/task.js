"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {  

    let totalAmount = 0,
        errorMessage = "";
  
    if (isNaN(percent) || percent === "") {
       errorMessage += `Параметр \'Процентная ставка\' содержит неправильное значение \'${percent}\' \n`;
    }

    if (isNaN(contribution) || contribution === "") {
      errorMessage += `Параметр \'Начальный взнос\' содержит неправильное значение \'${contribution}\' \n`;
    }

    if (isNaN(amount) || amount === "") {
      errorMessage += `Параметр \'Общая стоимость\' содержит неправильное значение \'${amount}\' \n`;
    }

    if (date.toString() === "Invalid Date") {
      errorMessage += "Параметр \'Срок ипотеки\' содержит неправильное значение" + "\n";
    }

    let currentDate = new Date(),
        futureDate = new Date(date);
        
    if (futureDate <= currentDate) {
      errorMessage += `Конечная дата ${futureDate.toDateString()} выплат по кредиту не может быть меньше или равна текущей дате ${currentDate.toDateString()} \n`;
    }

    if (errorMessage != "" || errorMessage == NaN) {
      return errorMessage;
    }

    let bodyCredit = Number(amount) - Number(contribution),
        percentPerMonth = Number(percent) / 12 / 100,         
        quantityOfMonths = monthsDiff(currentDate, futureDate),    
        monthlyInterestAmount =
          bodyCredit *
          (percentPerMonth +
            percentPerMonth /
              (Math.pow((1 + percentPerMonth), quantityOfMonths) - 1));

    
    totalAmount = Number((monthlyInterestAmount * quantityOfMonths).toFixed(2));

    console.log(totalAmount);

    return totalAmount;

}

function monthsDiff(date1, date2) {

  let months = date2.getMonth() - date1.getMonth() + (12 * (date2.getFullYear() - date1.getFullYear()));

  if (date2.getDate() < date1.getDate()) {
    months--;
  }
  
  return months;

}

function getGreeting(name) {
    
  let userName = name,
      greeting = "";
  
  if (name === "" || name === undefined || name === null) {
    userName = "Аноним";
  }

  greeting = `Привет, мир! Меня зовут ${userName}`;

  console.log(greeting);

  return greeting;
  
}