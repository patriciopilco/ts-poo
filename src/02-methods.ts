class MiFecha {
    anio:number;
    mes:number;
    dia:number;

    constructor(anio:number,mes:number,dia:number) {
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
    }

    printFormat(): string {
        return `${this.dia}/${this.mes}/${this.anio}`;
    }
}

const fecha = new MiFecha(2022,7,22);
console.log(fecha.printFormat());
console.log(fecha.dia);
console.log(fecha.mes);
console.log(fecha.anio);