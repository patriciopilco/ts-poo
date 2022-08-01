import { ReferenciaHttpService } from './services/referencia-http.service'

(async()=>{

    try {
    const referenciaService = new ReferenciaHttpService();
    console.log('---'.repeat(10));
    const referencias = await referenciaService.getAll();
    console.log(referencias.length);
    console.log(referencias.map(item => item));
    } catch ( error );
    ) {
        console.log("Error")
    }

})();