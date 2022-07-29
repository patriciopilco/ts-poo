class MyService {
    static instance: MyService | null = null;

    private constructor (
        private name:string
    ){};

    getName() {
        return this.name;
    }

    static crear(name:string){
        if(MyService.instance === null) {
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    };

}
const servicio1 = MyService.crear('servicio1')
console.log(servicio1.getName());
const servicio2 = MyService.crear('servicio2')
console.log(servicio2.getName());
const servicio3 = MyService.crear('servicio3')
console.log(servicio3.getName());