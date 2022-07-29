console.log(Math.PI);

class MyMath {
    static readonly PI:number = 3.14;

    static max(...lista: number[]):number {
        return lista[0];
    }
}

console.log(MyMath.PI);
console.log(MyMath.max(1,2,3));