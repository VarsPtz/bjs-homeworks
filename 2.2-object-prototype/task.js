"use strict";


// task 1
function getAnimalSound(animal) {
    return (typeof animal == "undefined") ? null : animal.sound;    
}


// task 2
function getAverageMark(marks) {
    
    let arrayMarksNumber = [];    
    let roundedAverageMark = 0;
    let sum = 0;  

    
    if (marks.length === 0) {
        roundedAverageMark = 0;
    } else {

        for (let i = 0; i < marks.length; i++) {
          arrayMarksNumber[i] = Number.parseInt(marks[i]);
          sum += arrayMarksNumber[i];
        }

        roundedAverageMark = Math.round(sum / arrayMarksNumber.length);

    }    

    return roundedAverageMark;

}


// task 3
function checkBirthday(birthday) {
    
    let now = Date.now(new Date());
    let arrayBirthday = birthday.split('-');    
    let birthdayDate = +new Date(arrayBirthday[0], arrayBirthday[1] - 1, arrayBirthday[2]);
    let age = (now - birthdayDate) / (1000 * 60 * 60 * 24 * 365.25);

    return age >= 18 ? true : false;
    
}