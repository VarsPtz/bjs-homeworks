"use strict";
class AlarmClock {
  constructor(timerId = null, alarmCollection = []) {
    this.timerId = timerId;
    this.alarmCollection = alarmCollection;    
  }

  addClock(timeStart, funcStart, id) {
    if (id === undefined) {
      console.error("Параметр идентификатора звонка не задан!");
      return;
    }

    if (this.alarmCollection.find((item) => item.id === id)) {
      // throw new Error(`Звонок с данным id: ${id} уже существует!`);// - не проходит Jasmine test
      console.error(`Звонок с данным id ${id} уже существует!`);
      return;
    }

    this.alarmCollection.push({
      id: id,
      time: timeStart,
      callback: funcStart,
    });
  }

  removeClock(id) {
    const lengthArrayAlarmCollectionBefore = this.alarmCollection.length;

    this.alarmCollection = this.alarmCollection.filter(
      (item) => item.id !== id
    );

    return lengthArrayAlarmCollectionBefore !== this.alarmCollection.length
      ? true
      : false;
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    let currentHour =
      currentDate.getHours() < 10
        ? "0" + currentDate.getHours()
        : currentDate.getHours();
    let currentMinutes =
      currentDate.getMinutes() < 10
        ? "0" + currentDate.getMinutes()
        : currentDate.getMinutes();

    return `${currentHour}:${currentMinutes}`;
  }

  start() {
     
    const currentTime = this.getCurrentFormattedTime;
    
    function checkClock(call) {
      if (call.time === currentTime()) {
        call.callback();
      }
    }

    if (this.timerId === undefined) {
     this.timerId = setInterval(() => {
       this.alarmCollection.forEach((item) => checkClock(item));
     }, 1000);
    }
  }

  stop() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.alarmCollection.timerId = undefined;
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(item => {
      console.log(`Будильник №${item.id} заведён на ${item.time}`);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}


// testCase
function testCase() {
  const phoneAlarm = new AlarmClock();
  phoneAlarm.addClock("20:01", () => console.log("Скоро спать"), 1);
  phoneAlarm.addClock(
    "20:02",
    () => {
      console.log("Пора готовиться ко сну!");
      phoneAlarm.removeClock(2);
    },
    2
  );
  phoneAlarm.addClock("20:03", () => console.log("Иди умываться"));
  phoneAlarm.addClock(
    "20:04",
    () => {
      console.log("Иди спать, завтра рано на работу!");
      phoneAlarm.clearAlarms();
      phoneAlarm.printAlarms();
    },
    3
  );
  phoneAlarm.addClock(
    "21:05",
    () => console.log("Иди спать, завтра рано на работу!"),
    1
  );
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}

testCase();
