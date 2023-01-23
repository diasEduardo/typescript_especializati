import {Request, Response} from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
interface BaseController{
    create(req:Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>>;
    update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>>;
    delete(req:Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>>;
    findOne(req:Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>>;
    findAll(req:Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>>;


}
export default BaseController;
