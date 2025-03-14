// 4.4  Aysnc/Await
// async await adalah cara yang lebih mudah dibaca dibanding .then() chaining
// contoh async/await
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        let data = await response.json();
        console.log(data)
    } catch(e) {
        console.error("error : ", e)
    }
}

fetchData();

// kode lebih clean (mirip kode synchronous, tapi tetap async)
// error handling lebih simpel dengan try catch