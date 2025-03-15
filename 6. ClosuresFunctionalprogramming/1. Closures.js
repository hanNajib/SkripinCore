// 6.1 Apa itu Closure?
// closure adalah kombinasi fungsi dan scope dimana dideklarasikan
// Closure bisa mengakses variabel dari parent function meskipun parent nya sudah selesai dieksekusi
// contoh sederhana
function outer() {
    let count = 0;

    return function inner() {
        count++
        console.log("Count: ", count)
    }
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// kenapa count tetap ada?
// karena fungsi inner() masih punya akses ke count melalui closure

// contoh closure
function createMultiplier(multiplier) {
    return function number(number) {
        return number * multiplier;
    }
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(5)) // 10
console.log(triple(5)) // 15

// kenapa ini powerfull?
// karena kita bisa membuat function customized dengan parameter tetap