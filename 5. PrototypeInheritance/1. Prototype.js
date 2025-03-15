const user = {
    name: "HanNajib",
    greet: function () {
        console.log("Hello ", this.name);
    }
}

user.greet() // Hello HanNajib
console.log(user.toString()) // [object Object] (diwarisi dari Object.prototype     )