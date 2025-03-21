// 9.7 Command Pattern 
// Pattern ini memisahkan aksi(command) dari object yang mengeksuekusinya 
// Cocok untuk sistem undo/redo seperti editor teks game atau transaksi

class Command {
    constructor(execute, undo) {
        this.execute = execute
        this.undo = undo
    }
}

class Calculator {
    constructor() {
        this.value = 0
        this.history = []
    }

    execute(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command ? command.undo(this.value) : this.value
    }

    getValue() {
        return this.value;
    }
}


const add10 = new Command(
    (value) => value + 10,
    (value) => value - 10
);

const multiplyBy2 = new Command(
    (value) => value * 2,
    (value) => value / 2
)

const calculator = new Calculator();
calculator.execute(add10)
console.log(calculator.getValue())

calculator.execute(multiplyBy2)
console.log(calculator.getValue())

calculator.undo();
console.log(calculator.getValue())

calculator.undo();
console.log(calculator.getValue())

// Berguna untuk fitur undo/reod di aplikasi