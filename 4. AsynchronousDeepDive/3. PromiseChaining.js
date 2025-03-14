// 4.3 Promises & Chaining
// Callback bisa membuat kode sulit dibaca(callback hell), jadi bisa pake Promises

// contoh promises sederhana
const myPromises = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if(success) resolve("Data berhasil diambil");
        else reject("Gagal mengambil data")
    }, 2000);
})

myPromises
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

// kenapa pakai promise?
// bisa pakai .then() untuk chaining (rangkaian proses async)
// bisa handle error dengan .catch()

// contoh promise chaining
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json)
    .then((data) => console.log(data))
    .catch((e) => console.error(e))