class Address{
    private _address: string;
    public _zipcode: string;
    public _number?: number;

    constructor(pAddress:string,pZipcode:string,pNumber:number){
        this._address=pAddress;
        this._zipcode=pZipcode;
        this._number = (typeof(pNumber) !== 'undefined')? Math.trunc(pNumber):undefined;
    }
    public get address(): string{
        return this._address;
    }
    public get zipcode(): string{
        return this._zipcode;
    }
    public get number(): number|undefined {
        return this._number;
    }
}
class User{
    protected name : string;
    protected email?: string = 'a@a.com';
    protected isActive?: boolean = false;
    protected address : Address[] = []

    constructor(pName:string,pEmail?: string,pIsActive?: boolean){
        this.name = pName;
        this.email = (typeof(pEmail) === 'undefined')? this.email: pEmail;
        this.isActive = (typeof(pIsActive) === 'undefined')? this.isActive: pIsActive;
    }

    setNewAddress = (newAddress:Address):void =>{
        this.address.push(newAddress);
    }

    getAttributes = ():string=> {
        return `${this.name},${this.email}, ${this.isActive}`
    }

    getAttr():string{
        return this.getAttributes();
    }

}

class Manager extends User{
    protected sector: string;

    constructor(pName:string,pSector:string,pEmail?: string,pIsActive?: boolean){
        super(pName,pEmail,pIsActive);
        this.sector = pSector;
    }

    getAttributes = ():string=> {
        return `${this.name},${this.sector}, ${this.email}, ${this.isActive}`
    }

    getAttr():string{
        return super.getAttr() + ' from parent';
    }


}

let user = new User('Eduardo');
let addr = new Address('rua jose jacques', '88020080',67);
user.setNewAddress(addr);
user.setNewAddress(addr);

let manager = new Manager('Marcos',"financeiro")
manager.setNewAddress(addr);
console.log(manager.getAttributes())
const userAttr = (user:User):string=>{
    return user.getAttributes();
}

console.log(userAttr(manager))
console.log(manager.getAttr())



export{}
