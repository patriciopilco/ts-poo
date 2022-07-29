
export interface Driver {

    usuario : string;
    clave: string;
    host: string;

    conectar():void;
    desconectar(): boolean;
}

class Oracle implements Driver {
    constructor(
    public usuario: string,
    public clave: string,
    public host: string,) {};


    conectar(): void {
        throw new Error("Method not implemented.");
    }
    desconectar(): boolean {
        throw new Error("Method not implemented.");
    }
    
}

const oracle = new Oracle('ora1','pass1','localhost');

console.log(oracle);
console.log(oracle.host);