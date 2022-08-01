import faker from '@faker-js/faker';
import { Referencia } from '../models/referencia.model';
import { ReferenciaService } from '../models/referencia-service.model';
import { HttpBaseService } from '../services/base-http.service'

import axios from 'axios';

export class ReferenciaHttpService extends HttpBaseService<Referencia> {

    url = 'https://meta-seguimiento-api.herokuapp.com/seguimiento/api/referencia'

    async getAll() {
        const {data} = await axios.get<Referencia[]>(this.url);
        return data;
    }
}