 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {	
  let algebra = a,
      geography = g,
      physics = p,
      averageScore;

      averageScore = ((algebra + geography + physics) / 3).toFixed(1); 

  return averageScore;

}

function sayHello(userName) {

  let myName = userName;   
  
  return `Привет, мир! Меня зовут ${myName}.`;
  
}

function calculateFormula() {

  let x,
      y,
      z,
      result;

  x = 2;
  y = 22;
  z = 0;
  result = x * y + 5 * z + x - 1;

  return result;

}
