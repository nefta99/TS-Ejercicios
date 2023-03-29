/*
    ===== Código de TypeScript =====
*/

import { table } from "console";

export interface Producto{
    desc: string ;
    precio: number;
}


const telefono: Producto = {
    desc: 'nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'ipad aire',
    precio: 350
}


export function calcularISV(productos : Producto[] ): [number,number]{
    let total =0;
    //Des-Estructuracion
    productos.forEach(({precio})=>{
        total += precio;
    })

    return [total,total* 0.15];
}


const articulos = [telefono, tableta];
//Des-Estructuracion de arreglos
const [total,isv] = calcularISV(articulos);
console.log('Total: ', isv)
console.log('ISV: ', isv)