// 4.2 Event Loop & Callback Queue
// bagaimana javascript menangani kode Asynchronous?
// Event Loop bekerja dalam 3 Bagian Utama :
// 1. Call Stack -> Menjalankan kode synchronous
// 2. Web API -> menangani tugas Async (setTimeout, AJAX, dll)
// 3. Callback Queue -> menyimpan tugas async yang selesai untuk dieksekusi

// contoh
console.log("start")

setTimeout(() => {
    console.log("Inside setTimeout")
}, 0)

console.log("end")
// output
// start
// end
// Inside setTimeout
