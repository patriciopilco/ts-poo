import axios from "axios";
import { BaseService } from "../models/base-services";

export class HttpBaseService<T> implements BaseService<T> {

    constructor(
        protected url:string,
    ){}

    async getAll():Promise<T[]> {
        const { data } = await axios.get<T[]>(this.url);
        return data;
    }

    async update<ID,DTO>(id:ID, changes:DTO ){
        const { data } = await axios.put(`${this.url}/${id}`,changes);
    }


}