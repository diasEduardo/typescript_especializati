//interface nada mais é que um struct nos exemplos só precisa criar objetos com a mesma estrutura
interface LocationMapInterface{
    readonly lat:number,
    readonly lon:number,
    alt?: number
}
// um ponto relevante é que algo que se adequa aos parametros da interface pode ser tratado como pertencente implicitamente.

const getLocation = (location:LocationMapInterface):void =>{
            console.log(`${location.lat} ${location.lon} ${location.alt}`);
}

let loc1 = {
    lat: 1,
    lon:2,
    test:3
}
getLocation(loc1);
let loc2 = {
    lat: 3,
    lon:4
}
getLocation(loc2);
let loc3 = {
    lat: 3,
    lon:4,
    alt:10
}
getLocation(loc3);

loc3.lat =5;
//note que
getLocation(loc3);

let loc4:LocationMapInterface = {
    lat: 3,
    lon:4,
    alt:10
}
//loc4.lat =5;
getLocation(loc3);
