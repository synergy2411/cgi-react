class Person {

}
class Student extends Person {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    getDetails(){
        return this.fname + " " + this.lname + "\nI'm " + this.age + " years old!"
    }

}

let foo = new Student("Foo", "Bar", 32);
console.log(foo.getDetails());