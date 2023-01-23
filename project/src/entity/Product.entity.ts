import { IsNotEmpty, isNotEmpty, Length } from "class-validator";
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
    deProduct: string;

    @Column({name:`VL_WEIGHT`,type:`int`})
    @IsNotEmpty()
    vlWeight:number;

    @Column({name:`DT_REGISTER`,type:`datetime`,default:()=>`GETDATE()` })
    dtRegister:Date;

    constructor(){
        if(!this.idProduct){
            this.idProduct = uuid();
        }
    }
}
