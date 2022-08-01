const promesa = (value:number) => {

    return new Promise(
        (resolve, reject) => {
            if(value >=10) {
                return resolve('Caso Exitoso');
            } else {
                return reject('Caso No Exitoso');
            }
        }
    );

}

promesa(10)
.then(result => console.log(result))
.catch(error => console.log(error));
           


promesa(1)
.then(result => console.log(result))
.catch(error => console.log(error));

