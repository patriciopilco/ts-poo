class MiFecha {
    public anio:number;
    public mes:number;
    private dia:number;

    constructor(anio:number,mes:number,dia:number) {
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
    }

    public printFormat(): string {
        const day = this.addPadding(this.dia);
        const month = this.addPadding(this.mes);
        return `${day}/${month}/${this.anio}`;
    }

    private addPadding(value: number){
        if(value <= 10) {
            return `0${value}`;
        }
        return `${value}`;
    }

}


const myDate = new MiFecha(2022,7,26);
console.log(myDate.printFormat());

