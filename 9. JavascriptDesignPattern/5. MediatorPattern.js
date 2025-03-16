// 9.5 Mediator Pattern (Komunikasi Terpusat)
// Menghindari komunikasi langsung antar objek dengan menggunakan mediator.
// Cocok untuk aplikasi kompleks dengan banyak komponen yang perlu berkomunikasi.

class ChatRoom {
    constructor() {
      this.users = {};
    }
  
    register(user) {
      this.users[user.name] = user;
      user.setRoom(this);
    }
  
    send(message, from, to) {
      if (to) {
        to.receive(message, from);
      } else {
        Object.keys(this.users).forEach((user) => {
          if (this.users[user] !== from) {
            this.users[user].receive(message, from);
          }
        });
      }
    }
  }


class User {
    constructor(name) {
        this.name = name;
        this.room = null
    }

    setRoom(room) {
        this.room = room
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} to ${this.name} : ${message}`)
    }
}


// contoh penggunaan
const chatRoom = new ChatRoom()

const han = new User("Han")
const najib = new User("Najib")
const johndoe = new User("Jhon Doe")

chatRoom.register(han)
chatRoom.register(najib)
chatRoom.register(johndoe)

han.send("Assalamualaikum")
najib.send("Waalaikumsalam", han)