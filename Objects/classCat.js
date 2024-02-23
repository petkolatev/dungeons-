
function classCat(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }
        speak() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < input.length; i++) {
        let catdata = input[i].split(' ');
        let name, age
        [name, age] = [catdata[0], catdata[1]]
        let cat = new Cat(name, age)
        cat.speak()
    }
}
classCat(['Mellow 2', 'Tom 5'])