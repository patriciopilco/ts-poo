import axios from 'axios';
import { Referencia } from './models/referencia.model';

(async () =>{

    async function  getReferencias() {
        const { data } = await axios.get<Referencia[]>('https://meta-seguimiento-api.herokuapp.com/seguimiento/api/referencia');
        return data;
    }
    
    const referencias = await getReferencias();
    
    console.log(referencias.map(item => console.log(item)));


})();


