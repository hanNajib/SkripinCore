// 5.6 Inheritance Dengan Extends dan Super
// extends digunakan untuk mewarisi class lain
// super() memanggil constructor parent class

class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log(`${this.name} membuat suara`)
    }
}

// Class cat mewarisi class Animal
class Cat extends Animal {
    constructor(name, color) {
        super(name) // Panggil constructor Animal
        this.color = color
    }

    meow() {
        console.log(`${this.name} (warna ${this.color}): Meow!`)
    }
}

const myCat = new Cat("Mimi", "putih")
myCat.makeSound(); // Mimi membuat suara
myCat.meow(); // Mimi (warna putih): Meow!

// kenapa pakai super(name)
// Karena kita ingin memanggil constructor Animal 