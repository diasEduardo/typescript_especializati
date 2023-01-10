const sumQ = (a:number,b:number):number =>{
    return a+b;
}
console.log(sumQ(1,7))

const sumQWihTaxOpt = (a:number,b:number,tax?:number):number =>{
    let discount = (typeof(tax) === undefined) ? 0:tax!;
    //it's a pain to handle undefined
    return a+b-discount;
}
console.log(sumQWihTaxOpt(1,7,4))

const sumQWihTax = (a:number,b:number,tax:number = 0):number =>{
    return a+b - tax;
}
console.log(sumQWihTax(1,7,4))

const calcTotal= (numbers:number[]):number =>{
    let total = 0;
    numbers.forEach(item => total+= item);
    return total;
}
console.log(calcTotal([1,7,4]))

const calcTotalInc= (...numbers:number[]):number =>{
    /// ... chance the sintaxe to a incremental template
    let total = 0;
    numbers.forEach(item => total+= item);
    return total;
}
console.log(calcTotalInc(1,7,4))
