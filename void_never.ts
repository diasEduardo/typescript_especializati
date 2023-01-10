const showLog = (text:string):void => console.log(text);
// permite return;
showLog('void pode retornar, mas não pode retornar um tipo')


const showLog2 = (text:string):never => {
    console.log(text);
    throw new  Error("error exemple never")
}
showLog2('never nao pode retornar nem undefined bixo')
