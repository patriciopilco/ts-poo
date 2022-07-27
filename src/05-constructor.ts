class MyDate {

    constructor(
        public year: number = 2022,
        public month: number = 7,
        public day: number = 5,
    ){ }

}

const mydate = new MyDate();
console.log(mydate);

console.log(mydate.day);
console.log(mydate.month);
console.log(mydate.year);