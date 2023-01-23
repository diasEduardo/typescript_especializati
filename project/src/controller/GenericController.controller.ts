import { validate } from 'class-validator';
import {Request, Response} from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { Repository } from 'typeorm';
import AppDataSource from '../database/connection';
import { Product } from '../entity/Product.entity';
import BaseController from './BaseInterface.controller';

class ProductController implements BaseController{
    private static productRepository: Repository<Product> = AppDataSource.getRepository(Product);

    public async create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        const product = new Product();
        product.nmProduct = req.body.nmProduct;
        product.vlWeight = req.body.vlWeight;
        product.deProduct = req.body.deProduct;

        const validationError = await validate(product)
        if (validationError.length > 0){
            return res.status(422).send({validationError})
        }

        const newProduct = await ProductController.productRepository.save(product);

        return res.status(201).send({data:newProduct})
    }
    public  async findAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>> {
        const products = await ProductController.productRepository.find();
        return res.status(200).send({data:products});
    }

    public  async findOne(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>> {
        const idProduct:string = req.params.id;
        const product = await ProductController.productRepository.findOneBy({idProduct});
        if(!product){
            return res.status(404).send({
                Error:"Product not founded"
            })
        }
        return res.status(200).send({data:product});
    }

    public  async update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>> {
        const idProduct:string = req.params.id;
        let product = await ProductController.productRepository.findOneBy({idProduct});
        if(!product){
            return res.status(404).send({
                Error:"Product not founded"
            })
        }
        product.nmProduct = req.body.nmProduct;
        product.vlWeight = req.body.vlWeight;
        product.deProduct = req.body.deProduct;
        const updatedProduct = await ProductController.productRepository.save(product);

        return res.status(200).send({data:updatedProduct});
    }

    public  async delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>):Promise<Response<any, Record<string, any>>> {
        const idProduct:string = req.params.id;
        await ProductController.productRepository.delete({idProduct});

        return res.status(204).send({});
    }

}
export default new ProductController;
