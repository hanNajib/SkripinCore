// 9.2 Singleton Pattern ( Hanya ada satu instance )
// cocok untuk konfigurasi global seperti Database connection

const Singleton = (function () {
    let instance;

    function createInstance() {
        return { name: "Singleton Instance"}
    }

    return {
        getInstance() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2) // true, sama instance