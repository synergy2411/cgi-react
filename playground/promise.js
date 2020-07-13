// TASK
function delay(ms) {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("Here the data comes....")
            resolve("Here the data comes....")
        }, ms)
    })
}

delay(3000).then(
    (response) => console.log('runs after 3 seconds', response),
    error => console.log(error)
    );


// Producer Code
// var demoPromise = (arr) => {
//   var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (arr.length <= 4) {
//         resolve({ message: "SUCCESS" });
//       } else {
//         reject(new Error("Something bad happened"));
//       }
//     }, 3000);
//   });
//   return promise;
// };

// // Consumer Code
// demoPromise( [2,3,4]).then(
//     (response) => console.log(response),
//     (error) => console.log(error)
//   );

// demoPromise( [3,4,5,6,7]).then(
//   (response) => console.log(response),
//   (error) => console.log(error)
// );


// Callbacks
// Promise
// Async...await
// Observable
