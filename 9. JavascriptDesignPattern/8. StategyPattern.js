// 9.8 Startegy Pattern
// pattern ini memungkinkan kita mengganti algoritma dengan mudah tanpa mengubah kode utama.
// cocok untuk sistem pembayaran, sorting atau AI behaviour

class Payment {
    constructor(strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy; // Perbaikan typo dan logika
    }

    pay(amount) {
        this.strategy.pay(amount)
    }
}

class PayPal {
    pay(amount) {
        console.log(`Paying ${amount} using PayPal.`)
    }
}

class Daun {
    pay(amount) {
        console.log(`Paying ${amount} using Daun.`)
    }
}

// contoh penggunaan :

const payment = new Payment(new PayPal())
payment.pay(100)

payment.setStrategy(new Daun())
payment.pay(200)
