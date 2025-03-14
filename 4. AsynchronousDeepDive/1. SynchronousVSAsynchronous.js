// 4.1 Synchronous vs Asynchronous
// synchronous (default javascript execution)
console.log("start...")
console.log("processing...")
console.log("End")
// Javascript menjalankan kode baris per baris, satu per satu


// Asynchronous (Menggunakan callback, Promises, atau async await)
// contoh setTimeout() (fungsi async dari Web API)

console.log("start...")
setTimeout(() => {
    console.log("Processing...");
}, 2000) // Delay 2 detik
console.log("end")
// output:
// start...
// end
// Processing...

// End tampil dulu karena setTimeout() tidak memblokir eksekusi kode. Javascript menunggu di background dan lanjut ke kode berikutna


