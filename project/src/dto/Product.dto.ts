class ProductDTO{
    idProduct: string;
    nmProduct: string;
    deProduct?: string;
    vlWeight:number;

    constructor(pIdProduct: string,pNmProduct:string,pVlWeight:number,pDeProduct?:string){
        this.idProduct = pIdProduct;
        this.nmProduct = pNmProduct;
        this.deProduct = pDeProduct;
        this.vlWeight = pVlWeight;
    }


}

export default ProductDTO;
