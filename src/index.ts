/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2 : Pasajero={
    nombre: 'Melissa',
    hijos:['daniel','adriana']
}


function imprimeHijos(pasajeros: Pasajero): void{
    //Encadenamiento
    const cuantosHijos = pasajeros.hijos?.length || 0;

    console.log(cuantosHijos);
}


imprimeHijos(pasajero2);