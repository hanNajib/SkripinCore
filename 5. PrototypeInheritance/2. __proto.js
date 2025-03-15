 // 5.2 Mengakses Prototype dengan __proto__ yang merujuk ke prototype parent nya
 // contoh manual

    const person = {
        isHuman: true
    }

    const me = {
        name: "Han",
        __proto__: person // menunjuk ke 'person' sebagai prototype                                                                                                                                                                                                                                                                                                                                                                                           _proto __: name
    }

    console.log(me.name) // Han (dari object sendiri)
    console.log(me.isHuman) // true (diwarisi dari prototype)
// kenapa me.isHuman bisa diakses? 
// karena me mewarisi dari person lewat prototype chain