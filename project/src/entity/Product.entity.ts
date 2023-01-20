import {Entity,Column,PrimaryColumn } from "typeorm"
import {v4 as uuid} from 'uuid'

@Entity(`PRODUCT`)
export class Product{
    @PrimaryColumn({name:`ID_PRODUCT`,type:`varchar`,length:255})
    idProduct: string;
    @Column({name:`NM_PRODUCT`,type:`varchar`,length:255}) // column type is case sensitive and lowercased
    nmProduct: string;
    @Column({name:`DE_PRODUCT`,type:`varchar`,length:255,nullable:true})
    deProduct: string;
    @Column({name:`VL_WEIGHT`,type:`int`})
    vlWeight:number;
    @Column({name:`DT_REGISTER`,type:`datetime`,default:()=>`GETDATE()` })
    dtRegister:Date;

    constructor(){
        if(!this.idProduct){
            this.idProduct = uuid();
        }
    }
}
