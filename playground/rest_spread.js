// Rest Operator ( ... )
// - when unknown number of parameters for function call
// - has to be last parameter in function definition

// const demo = (fname, ...args) => {
//     console.log(args[0]);               // ?
//     if(typeof(args[0]) === 'string'){
//         console.log("It's String");
//     }
//     // for(let item of args){
//     //     console.log(item);
//     // }
// }

// demo("foo", "test@test.com", 34);
// demo("foo", "test@test.com");
// demo("foo");

// Spread Operator ( ... )
//  - expands the collection into individual elements

let arr = [3, 4, 5];
// let newArr = [1, 2, ...arr, 6, 7, 8];
let newArr = [1, 2, arr, 6, 7, 8];

console.log(newArr); // [1,2,3,4,5,6,7,8]
