// 3. Hoisting & Temproral Dead Zone

// 3.1 Hoisting
// Hoisting adalah mekanisme dimana javascript "Mengangkat" deklarasi variabel dan fungsi ke atas scope nya sebelum kode dieksekusi
// contoh hoisting dengan var

console.log(name) // undefined
var name = "HanNajib"
console.log(name) // HanNajib
// Tidak error karena javascript mengangkat deklarasi var name; keatas tapi tidak dengan nilainya 
// POV Javascript :
// var name;
// console.log(name) // undefined
// var name = "HanNajib"
// console.log(name) // HanNajib




// 3.3 Hoisting dengan let & const ( Masuk ke TDZ ) (Temporal Dead Zone)


// console.log(age) // ReferenceError
let age = 21
console.log(age) // 21


// Error karena let masuk ke Temporal Dead Zone (TDZ), yang berarti variabelnya ada, tapi belum bisa diakses sebelum deklarasi dieksekusi
// Hoisting const juga sama dengan let

// var dihoist, tapi default nya undefined
// let & const di hoist, tapi masuk ke Temporal Dead Zone sampai deklarasi dijalankan




// 3.4 Hoisting Function: function declaration vs Function expression
// function declaration
hello(); // works
function hello() {
    console.log("hello")
}
// karena function declaration dihoist lengkap dengan body nya

// function expression
// greet(); // referenceError
const greet = function() {
    console.log("hello")
}


