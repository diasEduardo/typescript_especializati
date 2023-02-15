import ProductDTO from '@/dto/Product.dto';
import ProductRepository from '@/repository/Product.Repository';
import {Request, Response} from 'express';
import AppDataSource from '../database/connection';

class ProductController{
    private productRepository: ProductRepository;

    constructor(){
        this.productRepository =  new ProductRepository(AppDataSource);
    }

    create = async (req: Request, res: Response): Promise<Response> =>{
        const [status,retDTO] = await this.productRepository.create(req.body);
        return res.status(status).send(retDTO);
    }

    findAll = async (req: Request, res: Response):Promise<Response> =>{
        const [status,retDTO] = await this.productRepository.findAll();
        return res.status(status).send(retDTO);
    }

    findOne = async(req: Request, res: Response):Promise<Response> => {
        let productDTO:ProductDTO;
        if(Object.keys(req.params).length > 0){
            productDTO = req.params as unknown as ProductDTO;
        }else if(Object.keys(req.query).length > 0){
            productDTO = req.query as unknown as ProductDTO;
        }else{
            productDTO = req.body;
        }
        const [status,retDTO] = await this.productRepository.findOne(productDTO);
        return res.status(status).send(retDTO);
    }
    findMany = async(req: Request, res: Response):Promise<Response> => {
        let productDTO:ProductDTO;
        if(Object.keys(req.query).length > 0){
            productDTO = req.query as unknown as ProductDTO;
        }else{
            productDTO = req.body;
        }
        const [status,retDTO] = await this.productRepository.findMany(productDTO);
        return res.status(status).send(retDTO);
    }

    update = async (req: Request, res: Response):Promise<Response> => {
        let productDTO:ProductDTO = req.params as unknown as ProductDTO;
        let [status,retDTO] = await this.productRepository.findOne(productDTO);

        if(status === 200){
            productDTO = req.body;
            [status,retDTO] = await this.productRepository.update(productDTO);
        }

        return res.status(status).send(retDTO);
    }

    delete =  async (req: Request, res: Response):Promise<Response> => {
        const [status,retDTO] = await this.productRepository.delete(req.params.id);
        return res.status(status).send(retDTO);
    }

}
export default new ProductController;
