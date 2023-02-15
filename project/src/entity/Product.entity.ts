import ProductDTO from "@/dto/Product.dto";
import { IsNotEmpty, isNotEmpty, Length, ValidateIf } from "class-validator";
import {Entity,Column,PrimaryColumn } from "typeorm"
import {v4 as uuid} from 'uuid'

@Entity(`PRODUCT`)
export class Product{
    @PrimaryColumn({name:`ID_PRODUCT`,type:`varchar`,length:255})
    idProduct: string;

    @Column({name:`NM_PRODUCT`,type:`varchar`,length:255}) // column type is case sensitive and lowercased
    @IsNotEmpty()
    @Length(0,255)
    nmProduct: string;

    @Column({name:`DE_PRODUCT`,type:`varchar`,length:255,nullable:true})
    @Length(0,255)
    @ValidateIf((object, value) => (value !== null) && (value !== undefined) )
    deProduct: string;

    @Column({name:`VL_WEIGHT`,type:`int`})
    @IsNotEmpty()
    vlWeight:number;

    @Column({name:`DT_REGISTER`,type:`datetime`,default:()=>`GETDATE()` })
    dtRegister:Date;

    constructor(dto:ProductDTO);
    constructor();
    constructor(...args: any[]){
        if(!this.idProduct){
            this.idProduct = uuid();
        }
        if(args.length == 1){
            this.nmProduct = args[0].nmProduct;
            this.vlWeight = args[0].vlWeight;
            this.deProduct = args[0].deProduct;
        }

    }
}
