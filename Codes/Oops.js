//class
class Animals {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}
let dog = new Animals("Dog");
dog.speak();  //Dog makes a noise


