// var names = ['Beckham', 'Zidane', 'Ronaldo', 'Figo'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// console.log('=====================');
//
// names.forEach((name) => console.log('arrow', name));


// CHALLENGE

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => a + b;

console.log(addStatement(10, 15));

var addExpression = (a, b) => console.log(a + b);

addExpression(90, 100);
