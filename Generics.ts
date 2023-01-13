function exemple (value:string):string{
    return value;
}
function exemple2<T> (value:T):T{
    return value;
}


//generics é pra gerar funções que recebem tipos dinamicos.

const ex = <T>(value:T):T => value;

class Exemple<T,U>{
    private _value:T;
    private _value2:T;
    private _value3:U;
    get value():T { return this._value};
    get value2():T { return this._value2};
    get value3():U { return this._value3};

    constructor(value:T,value2:T,value3:U){
        this._value=value;
        this._value2=value2;
        this._value3=value3;

    }


}
//infere o tipo
const ex1 = new Exemple("teste","1",2);
const ex3 = new Exemple("teste","1",true);
const ex2 = new Exemple<string,boolean>("teste","1",false);

// keyof diz que o K deve ser uma chave de T
const getProperty = <T,K extends keyof(T)>(obj:T,key:K):T[K] =>{
    return obj[key];
}

const ob ={
    nome:'aaa',
    idade:21
}
const ob2 ={
    nome:'bbb',
    idade:22,
    sexo:'M'
}
const arr =[1,2321312,53423]
console.log(getProperty(ob,'nome'));
console.log(getProperty(ob,'idade'));
//console.log(getProperty(ob,'nome2'));
console.log(getProperty("adssd",1));
console.log(getProperty(arr,4));


const union = <T,U>(a:T,b:U):T&U=>{
    return {...a,...b};
    return Object.assign({},a,b)
}

console.log(union(ob,ob2));
console.log(union(ob,arr));
