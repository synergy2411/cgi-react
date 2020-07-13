// variable Hoisting

// var demo = (arr) => {
//     // var flash = undefined;
//     // var load = undefined;
//     if(arr.length > 2){
//         let flash = "FLASHING"
//         console.log(load);          // undefined
//     }else{
//         let load = "LOADING";
//     }
// }

// demo([2,3,4,5]);


// const USERNAME = "Foo";

// const LOAD = "LOADING";

const USER = {
    name : "Foo"
}

// USER.name = "Bar";

// USER = {
//     name : "Bar"
// }

console.log(USER.name);         // ?

const USERNAME = "Bam";
USERNAME = "BAZ";




// Primitive types - String, number, Date, Boolean

let fname = "Foo";
fname = "Bar";
// Reference types - Object, array, Functions
let arr = [];
arr.push(2);