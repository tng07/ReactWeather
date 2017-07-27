// // CALLBACK
//
// function getTempCallBack(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// // PROMISE
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(100);
//       reject('City not found');
//     }, 3000)
//   });
// }
//
// getTempPromise('Irvine').then(function(temp){
//   console.log('promise succes', temp);
// }, function(err){
//   console.log('promise error', err);
// });


//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=eb829860d42866167b475ec53dd58386&units=metric


//CHALLENGE

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('please enter two numbers.');
    }
  });
}

addPromise(5, 20).then(function(result) {
  console.log('sucess: the sum is', result);
}, function(err) {
  console.log('error:', err);
});

addPromise('h', 10).then(function(result){
  console.log('the sum is:', result);
}, function(err) {
  console.log('error:', err);
});

addPromise(23).then(function(result){
  console.log('the sum is:', result);
}, function(err) {
  console.log('error:', err);
});
