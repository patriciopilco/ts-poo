import { Referencia } from './../models/referencia.model';

export interface CreateReferenciaDto extends Omit<Referencia, 'idReferencia' | 'listaProyectos'> {}

export interface UpdateReferenciaDto extends Partial<CreateReferenciaDto>{}