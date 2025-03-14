// 2. Closures
// Closures adalah kombinasi antara function + lexical enviroment tempat function itu dibuat. dengan closure, sebuah function bisa "mengingat" scope dimana dia dibuat, bahkan setelah scope itu selesai dieksekusi

// contoh closures dalam action :
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer ${outerVariable}, Inner ${innerVariable}`)
    }
}

const newFunc = outerFunction("Hello")
newFunc("World") // Output: Outer Hello, Inner World

// Manfaat closure : 
// Encapsulation (Data Private) : Membuat variable private
// Memoization : Menyimpan data dalam memory untuk meningkatkan performa.
// Currying : Membantu dalam functional programming

// contoh closure untuk private data :

function createCounter() {
    let count = 0;

    return {
        increment : function () {
            count++
            console.log(count)
        },
        decrement : function () {
            count--
            console.log(count)
        }
    }
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

// count hanya ada didalam scope createCounter(), dan hanya bisa diakses melalui fungsi yang dikembalikan (increment, decrement)