// // Node installer comes with :
// //  - Node Package Manager (npm) - installing the projects developed by community.
// //  - Node Runtime Environment - can run JS code
// //  - Node Native/Core Modules

// // JavaScript can be run in Browser Environment as well as NRE

// // ARROW FUNCTION

// // ES5 way
// var numbers = [1,2,3,4,5];

// var doubleValueArray = numbers.map(function(value){
//     return value * 2;
// })

// console.log(doubleValueArray);

// // - With curly braces

// // var tripleValueArray = numbers.map((value) => {
// //     return value * 3;
// // })

// // console.log(tripleValueArray);


// // - Without curly braces - for only one-liner

// var tripleValueArray = numbers.map(value => value * 3);
// console.log(tripleValueArray);



// TASK

// function ask(question, yes, no){}
var ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}


ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You cancelled the execution.")
)