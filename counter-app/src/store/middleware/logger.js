
// const logger = store => {
//     return (next) => {
//         return (action) => {
//             return next(action);
//         }
//     }
// }


const myLogger = myStore => next => action => {
    // write the side-effect
    console.log("[Logger Works]");
    console.log("[STATE]", myStore.getState());
    console.log("[ACTION]", action);
    // The action supplied to the next() function will reach to the reducer
    setTimeout(() => {
      next(action);
    }, 2000);
    
  }

  export default myLogger;