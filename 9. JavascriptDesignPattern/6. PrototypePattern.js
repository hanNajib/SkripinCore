// 9.6 Prototype Pattern (Javascript OOP)
// Prototype Pattern memungkinkan kita membuat object baru dengan mewarisi properti dari prototype.
// Cocok untuk sistem berbasis OOP (Object-Oriented Programming).

const Person = {
    greet() {
        console.log(`Assalamualaikum, nama saya ${this.name}`)
    }
}

const person1 = Object.create(Person)
person1.name = "Han"
person1.greet();

const person2 = Object.create(Person)
person2.name = "Najib"
person2.greet();