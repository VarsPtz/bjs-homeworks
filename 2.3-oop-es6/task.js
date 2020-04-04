"use strict";

// task 1
class Weapon {
  
 constructor({name, attack, durability, range}) {
   this.name = name;
   this.attack = attack;
   this.durability = durability;
   this.initialDurability = durability;
   this.range = range;
 }

 takeDamage(damage) {  
   this.durability -= damage;
   if (this.durability < 0) {
     this.durability = 0;
   }
 }

 getDamage() {  

   const percent = 0.3;
   let currentAttack;
   
   if (this.durability >= this.initialDurability * percent) {
    currentAttack =  this.attack;
   }

   if (this.durability == 0) {
    currentAttack = 0;
   }

   if (this.durability < this.initialDurability * percent && this.durability > 0) {
    currentAttack = this.attack / 2;
   }

   return currentAttack;

 }

 isBroken() {
  return (this.durability > 0) ? false : true;
 }

}

const arm = new Weapon ({
  name: "Рука",
  attack: 1,
  durability: Infinity,
  range: 1
});

const bow = new Weapon ({
  name: "Лук",
  attack: 10,
  durability: 200,
  range: 3
});

const sword = new Weapon ({
  name: "Меч",
  attack: 25,
  durability: 500,
  range: 1 
});

const knife = new Weapon ({
  name: "Нож",
  attack: 5,
  durability: 300,
  range: 1
});

const staff = new Weapon ({
  name: "Посох",
  attack: 8,
  durability: 300,
  range: 2
});

const longBow = new Weapon ({
  name: "Длинный лук",
  attack: 15,
  durability: 200,
  range: 4
});

const axe = new Weapon ({
  name: "Секира",
  attack: 27,
  durability: 800,
  range: 1
});

const stormStaff = new Weapon ({
  name: "Посох Бури",
  attack: 10,
  durability: 300,
  range: 3
});



// task 2
class Arm extends Weapon{
  constructor() {
    super({
      name: "Рука",
      attack: 1,
      durability: Infinity,
      range: 1
    });
  }
}

class Bow extends Weapon{
  constructor() {
    super({
      name: "Лук",
      attack: 10,
      durability: 200,
      range: 3
    });
  }
}

class Sword extends Weapon{
  constructor() {
    super({
      name: "Меч",
      attack: 25,
      durability: 500,
      range: 1
    });
  }
}

class Knife extends Weapon {
  constructor() {
    super({
      name: "Нож",
      attack: 5,
      durability: 300,
      range: 1
    });
  }
}

class Staff extends Weapon {
  constructor() {
    super({
      name: "Посох",
      attack: 8,
      durability: 300,
      range: 2
    });
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = "Длинный лук";
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
    this.initialDurability = this.durability;
  }
}

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = "Посох Бури";
    this.attack = 10;
    this.range = 3;
  }
}

const newBow = new Bow();

console.log(newBow.name); // Лук
console.log(newBow.attack); // 10
console.log(newBow.durability); // 200
console.log(newBow.range); // 3






// task 3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjectGradeArray = {};
  }
  
  getName() {
    return this.name;
  }

  findSubject(subject) {
    return (subject in this.subjectGradeArray);
  }
  
  addGrade(grade, subject) {

    if (!this.findSubject(subject)) {
      this.subjectGradeArray[subject] = [];
    }

    const marksArray = [1, 2, 3, 4, 5];

    if (marksArray.indexOf(grade) !== -1) {
      this.subjectGradeArray[subject].push(grade);
    } else {
      console.log(`Вы пытались поставить оценку \"${grade}\" по предмету \"${subject}\". Допускаются только числа от 1 до 5.`);
    }

    return this.subjectGradeArray[subject].length;
    
  }

  getAverageBySubject(subject) {

    let averageMark;

    if (!this.findSubject(subject) || this.subjectGradeArray[subject].length === 0) {
      averageMark = 0;
    } else {
      let sum = 0;

      for (let item of this.subjectGradeArray[subject]) {
        sum += item;
      }

      averageMark = sum / this.subjectGradeArray[subject].length;
    }

    return averageMark;

  }

  getTotalAverage() {
    
    let sumAverageMarks = 0;
    let averageScoreForAllSubjects = 0;

    for (let subject in this.subjectGradeArray) {      
      sumAverageMarks += this.getAverageBySubject(subject);
    }

    if (sumAverageMarks !== 0) {
      averageScoreForAllSubjects = sumAverageMarks / Object.keys(this.subjectGradeArray).length;
    }

    return averageScoreForAllSubjects;

  }

}

const log = new StudentLog("Олег Никифоров");
console.log(log.getName());

console.log(log.addGrade(Number, "algebra"));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage());
