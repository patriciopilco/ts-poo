class MiFecha {
    public anio:number;
    public mes:number;
    public dia:number;

    constructor(anio:number,mes:number,dia:number) {
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
    }

    public printFormat(): string {
        return `${this.dia}/${this.mes}/${this.anio}`;
    }

}


const myDate = new MiFecha(2022,7,26);
console.log(myDate.dia);

myDate.dia = 12;

console.log(myDate.dia);