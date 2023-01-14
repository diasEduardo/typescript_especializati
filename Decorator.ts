const Log = <T>(prefix:T): Function =>{

    return (target:any,key:string):void=>{
        console.log(prefix,target,key);
    }
}
const minLength = (length:number): Function =>{
    return (target:any,key:string):void=>{
        let val = target[key]
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Value for ${key} need more then ${length}`)
            }

            val = value
        }
        Object.defineProperty(target, key, {
            get: ()=> val,
            set: setter,
        })
    }
}
const maxLength = (length:number): Function =>{
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val
        const setter = (value: string) => {
            if (value.length > length) {
                throw new Error(`Value for ${key} need more then ${length}`)
            }

            val = value
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    }
}

@Log('fffff')
class Exemple{
    @minLength(3)
    @maxLength(3)
    private name:string = 'aaa';

    constructor(pName:string){
        this.name=pName;
    }
}


const setAPIVersion = (apiVersion:string):Function =>{
    return (parentClass:any)=>{
        return  class extends parentClass {
            private version:string = apiVersion;

        }
    }
}

@setAPIVersion('1.0.1')
class API {}

console.log(new API);
console.log(new Exemple('bbb'));








export{}
