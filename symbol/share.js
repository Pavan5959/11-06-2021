

let obj =  Symbol.for('age');
let obj1 = Symbol.for('age');

let person = {
  name : 'songs',
  age : 27
};

function makeAge(){
  let obj2 = Symbol.for('age');
  person[obj2] = 30;
}
makeAge();
console.log(person[obj]);
console.log(person['age']);
console.log(person.age);



