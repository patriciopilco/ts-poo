import { CreateReferenciaDto, UpdateReferenciaDto } from "../dto/referencia.dto";
import { Referencia } from "./referencia.model";

export interface ReferenciaService {
    getAll():Promise<Referencia[]>;
    //update(id:Referencia[idReferencia], changes : UpdateReferenciaDto):Referencia;
    //create(dto: CreateReferenciaDto) :Referencia;
    //findOne(id:Referencia[idReferencia]):Referencia;

}