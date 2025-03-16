// 9.4 Observer Pattern (Event driven programming)
// Pattern ini memungkinkan objek untuk "mengamati" perubahan di objek lain dan bereaksi secara otomatis!
// Cocok untuk sistem event-driven seperti real-time chat, stock price updates, dll.

class Observable {
    constructor() {
        this.subscriber = [];
    }

    subscribe(fn) {
        this.subscriber.push(fn)
    }

    unsubscribe(fn) {
        this.subscriber = this.subscriber.filter((sub) => sub !== fn)
    }
    
    notify(data) {
        this.subscriber.forEach((element) => {
            element(data)
        });
    }
}

// contoh penggunaan
const newsChannel = new Observable()

function user1(news) {
    console.log(`User 1 received news : ${news}`)
}

function user2(news) {
    console.log(`User 2 received news : ${news}`)
}

newsChannel.subscribe(user1)
newsChannel.subscribe(user2)

newsChannel.notify(`Breaking news: Pisang goreng enak banget`)

newsChannel.unsubscribe(user1)

newsChannel.notify(`Breaking news: Javascript is Awesome`)
