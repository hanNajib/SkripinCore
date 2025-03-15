// 5.5 Class Inheritance (ES6)
// cara modern untuk menggunakan inheritance adalab dengan 'class'

// contoh
class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log(`${this.name} membuat suara`)
    }
}

const cat = new Animal("Kucing")
cat.makeSound() // Kucing membuat suara