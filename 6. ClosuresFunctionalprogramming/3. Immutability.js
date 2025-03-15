// 6.3 Immutability
// tidak merubah array atau object secara langsung, gunakan map(), filter(), atau reduce()

// Jangan Pakai Mutating array
let number = [1, 2, 3]
number.push(4); // mengubah array asli

// Gunakan Immutable
let newNumber = [...number, 4] // lebih aman
// gunakan spread operator lalu ikuti dengan apa yang ingin ditambahkan