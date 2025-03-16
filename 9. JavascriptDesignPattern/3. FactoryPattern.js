// 9.3 Factory Pattern ( Membuat object tanpa new )
// Factory pattern bagus untuk membuat object yang banyak dengan template tertentu

function createUser(name, role) {
    return {
        name,
        role,
        sayHello() {
            console.log(`Hello, my name is ${name} and I am a ${role}`)
        }
    }
}

const user1 = createUser('Han', 'Frontend Developer')
const user2 = createUser('Najib', 'Backend Developer')

user1.sayHello();
user2.sayHello();

// Bisa digunakan untuk user, product, dll~