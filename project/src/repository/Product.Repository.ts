import { Product } from "@/entity/Product.entity";
import { DataSource, Repository } from "typeorm";
import ProductDTO from "@/dto/Product.dto";
import ReturnDTO from "@/dto/Return.dto";
import { validate } from "class-validator";

class ProductRepository{
    private repository: Repository<Product> ;
    constructor(appDataSource:DataSource){
        this.repository = appDataSource.getRepository(Product);
    }
    public findAll = async ():Promise<[number,ReturnDTO]> => {
        try{
            const products = await this.repository.find()
            return [200, new ReturnDTO(true,`Busca efetuada`,products)];
        }catch(ex){
            return [400, new ReturnDTO(false,`Ocorreu um erro`)];
        }
    }
    public create = async (productDTO:ProductDTO):Promise<[number,ReturnDTO]> => {
        let product = new Product(productDTO);
        const validationError = await validate(product)
        if (validationError.length > 0){
            return [422, new ReturnDTO(false,`Ocorreu um erro de validação`,validationError)];
        }

        try{
            product = await this.repository.save(product)
            return [200, new ReturnDTO(true,`Criado Com sucesso`,product)];
        }catch(ex){
            return [400, new ReturnDTO(false,`Ocorreu um erro`)];
        }

    }
    public findOne = async (filter:ProductDTO):Promise<[number,ReturnDTO]> => {
        try{
            const product = await this.repository.findOne({where:filter})
            if(!product){
                return [404, new ReturnDTO(false,`Product not founded`)];
            }
            return [200, new ReturnDTO(true,`Busca efetuada`,product)];
        }catch(ex){
            return [400, new ReturnDTO(false,`Ocorreu um erro`)];
        }
    }
    public findMany = async (filter:ProductDTO):Promise<[number,ReturnDTO]> => {
        try{
            const product = await this.repository.find({where:filter})
            if(!product){
                return [404, new ReturnDTO(false,`Product not founded`)];
            }
            return [200, new ReturnDTO(true,`Busca efetuada`,product)];
        }catch(ex){
            return [400, new ReturnDTO(false,`Ocorreu um erro`)];
        }
    }
    public update = async (productDTO:ProductDTO):Promise<[number,ReturnDTO]> => {
        let product = new Product(productDTO);
        const validationError = await validate(product)
        if (validationError.length > 0){
            return [422, new ReturnDTO(false,`Ocorreu um erro de validação`,validationError)];
        }

        try{
            product = await this.repository.save(product)
            return [200, new ReturnDTO(true,`Alterado com sucesso`,product)];
        }catch(ex){
            return [400, new ReturnDTO(false,`Ocorreu um erro`)];
        }

    }
    public delete = async (id:string):Promise<[number,ReturnDTO]> => {
        try{
            const result = await this.repository.delete(id);
            console.log(result)
            if(!result || result?.affected == 0){
                return [404, new ReturnDTO(false,`Produto não encontrado`)];
            }
            return [200, new ReturnDTO(true,`Apagado com sucesso`)];

        }catch(ex){
            return [400, new ReturnDTO(false,`Ocorreu um erro`)];
        }

    }


}
export default ProductRepository;
