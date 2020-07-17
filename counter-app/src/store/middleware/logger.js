
// const logger = store => {
//     return (next) => {
//         return (action) => {
//             return next(action);
//         }
//     }
// }


const logger = store => next => action => {
    // write the side-effect
    console.log("[Logger Works]");
    console.log("[STATE]", store.getState());
    console.log("[ACTION]", action);
    // The action supplied to the next() function will reach to the reducer
    setTimeout(() => {
      next(action);
    }, 2000);
    
  }

  export default logger;