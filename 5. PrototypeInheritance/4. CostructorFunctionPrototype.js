// 5.4 Constructor function & Prototype
// constructor function adalah cara untuk membuat objek dengan prototype secara otomatis

// contoh
function person(name, age) {
    this.name = name;
    this.age =age;
}

person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`)
}

const user1 = new person("HanNajib", 17)
const user2 = new person("myIstri", 17)

user1.sayHello();
user2.sayHello();

// kenapa pake prototype ?
// Menghemat memori -> Method sayHello habnya dibuat sekali