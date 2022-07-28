export class Animal {
    constructor(
        protected name:string
    ){}

    move() {
        console.log('Moving');
    }

    greeting() {
        return `Hello, I´m ${this.name}`;
    }
}

export class Dog extends Animal {

    constructor(
        name: string,
        public owner:string
    ) {
        super(name);
    }

    woof(times:number) {
        for(let index = 0; index < times; index++) {
            console.log('wooooof');
        } 
    }
}



const mashu = new Dog('mashu','patto');
mashu.move();
console.log(mashu.greeting());
mashu.woof(5);
console.log(mashu.owner);

