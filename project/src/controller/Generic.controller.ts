import { ObjectLiteral, EntityTarget , Repository } from "typeorm";
import {Request, Response} from 'express';
import AppDataSource from "@/database/connection";
import { Product } from "@/entity/Product.entity";

class GenericController<entity extends Product>{
    private repository:any;
    private entityTarget: String;
    constructor(entityTarget:EntityTarget<entity>){
        this.entityTarget =entityTarget.toString() ;
        this.repository = AppDataSource.getRepository(entityTarget);
        console.log(entityTarget)
        console.log(AppDataSource.getRepository(entityTarget))
    }
    findAll = async (a:string,req: Request, res: Response):Promise<Response> => {
        const dataObjects = await this.repository.find();
        return res.status(200).send({data:dataObjects});
    }
    public  async findOne(req: Request, res: Response):Promise<Response> {
        const id:string = req.params.id;
        const obj = null//await this.repository.findOneBy({i});
        if(!obj){
            return res.status(404).send({
                Error: this.entityTarget+"not founded"
            })
        }
        return res.status(200).send({data:obj});
    }
}
export default GenericController;



