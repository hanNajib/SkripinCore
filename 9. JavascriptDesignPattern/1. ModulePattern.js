// 9.1 Module Pattern (Encapsulation Javascript)
// module pattern menjaga variable tetap private dan hanya expose function tertentu

const CounterModule = (function() {
    let count = 0;

    return {
        increment() {
            count++;
            console.log(`Count : ${count}`)
        },
        decrement() {
            count--;
            console.log(`Count : ${count}`)
        }
    }
})();

CounterModule.increment(); // 1
CounterModule.increment(); // 2
CounterModule.decrement(); // 1

// Kita bisa mengontrol akses data dengan module pattern