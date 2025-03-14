// 1. Execution Context
// setiap kali javascript menjalankan kode, dia membuat sesuatu yang disebut Execution Context(EC)
// - Variable enviroment -> menyimpan semua variable dan fungsi yang dibuat didalamnya
// - Lexical enviroment -> menyimpan scope dan dan reference ke parent scope
// - This binding -> Menentukan nilai dari this 


//contoh

function first() {
    console.log("Hello from first function")
}

function second() {
    first();
    console.log("Hello from second function");
}

second();

