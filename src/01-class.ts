class MiFecha {
    anio:number;
    mes:number;
    dia:number;

    constructor(anio:number,mes:number,dia:number) {
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
    }
}


const mydate = new MiFecha(2022,7,22);

console.log(mydate);