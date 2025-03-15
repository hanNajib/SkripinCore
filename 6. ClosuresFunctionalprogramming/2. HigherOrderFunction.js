// 6.2 Higher Order Function 
// Higher Order Function adalah fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi
// contoh :
function repeat(action, times) {
    for(let i = 0; i < times; i++) {
        action(i)
    }
}

repeat(console.log, 3)
// fungsi repeat menerima fungsi console.log sebagai parameter


// contoh Map, Filter, Reduce

// Map => mengubah setiap elemen
const number = [1, 2, 3, 4, 5]
const doubled = number.map(num => num * 2)
console.log(doubled) // [ 2, 4, 6, 8, 10 ]

// Filter => memfilter elemen berdasarkan kondisi
const even = number.filter(num => num % 2 === 0)
console.log(even) // [ 2, 4 ]

// reduce => mengurangi array jadi satu nilai
const sum = number.reduce((total, num) => total + num, 0)
console.log(sum) // 15  


// Kenapa pakai Higher Order Function?
// kode lebih clean dan lebih readable

