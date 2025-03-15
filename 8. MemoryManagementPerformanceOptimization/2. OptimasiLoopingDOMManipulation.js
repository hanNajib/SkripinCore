// 8.2 Optimasi Looping & DOM Manipulation

const number = [1, 2, 3, 4, 5]


// Gunakan forEach() atau map() daripada for biasa

// Cara kurang optimal
for(let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

// Lebih clean & performa bagus
number.forEach((num) => console.log(num));



// Gunakan Document Fragment untuk Banyak Manipulasi DOM
const list = document.getElementById("list")
const fragment = document.createDocumentFragment();

for(let i = 0; i < 1000; i++) {
    const item = document.createElement("li")
    item.textContent = `Item ${i}`
    fragment.appendChild(item)
}

list.appendChild(fragment) // Semua Element Ditambahkan Sekaligus

// Menggunakan fragment jauh lebih cepat dibanding menambahkan element satu per satu