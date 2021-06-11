

let obj={
  name : 'jordge',
  [Symbol] : 22
};

console.log(obj.name, obj[Symbol]);

for(let key in obj){
  console.log(key);
  console.log(obj[key]);
}
