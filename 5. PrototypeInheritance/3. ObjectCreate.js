// 5.3 Membuat prototype dengan Object.create()

const animal = {
    canEat: true,
    makeSound: function () {
        console.log("Animal sound!")
    }
}
const dog = Object.create(animal)
dog.barks = function () {
    console.log("woof woof!")
}

console.log(dog.canEat);
dog.makeSound()
dog.barks()
