class MyDate {

    constructor(
        public year: number = 2022,
        public month: number = 7,
        private _day: number = 5,
    ){ }

    get day(){
        return this._day;
    }

    set day(day:number){
        this.day = day;
    }

}

const mydate = new MyDate();

console.log(mydate.day)