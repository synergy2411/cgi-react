// Destructuring :
//  - Array - indexed collection

// let friends = ["foo", "Bam", "Bar", "Baz"];

// let [f1, f2, f3, f4, f5] = friends;

// // console.log(f3);            // ?
// console.log(f5);            // ?

// - Object - unordered collection

let draw = {
  drawText: (text) => console.log("Drawing " + text),
  drawCircle: (r) => console.log("Drawing " + Math.PI * r * r),
  drawRect: (w, h) => console.log("Drawing : " + w * h),
};

// draw.drawCircle(3);

let { drawCircle: dc, drawText: dt, drawRect } = draw;

// dc(5);

// dt("Sample Text");

// Nested Destructuring

let user = {
  firstName: "Foo",
  lastName: "Bar",
  address: {
    city: "Bengaluru",
    street: "201, Main Road",
  },
  friends: ["Bob", "Bas", "Baz"],
};

let {
  firstName: fn,
  lastName: ln,
  address: { city: ct, street: st },
  friends: [f1, f2, f3],
} = user;

// console.log(fn, ln, ct, st, f1, f2, f3);

let todos = [
    {label : "L1", status : "done"},
    {label : "L2", status : "pending"},
    {label : "L3", status : "done"}
]
