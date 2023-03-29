/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion: string;
    detalles:Detalles;
}

interface Detalles{
    autor : string;
    anio : number;
}

const reproductor: Reproductor={
    volumen:90,
    segundo:36,
    cancion:'mess',
    detalles:{
        autor:'ed shirand',
        anio:2015
    }
}



//Des-Estructuración de objetos
const{volumen,segundo,cancion,detalles} = reproductor;
const{autor}=detalles;

//console.log('El volumen actual de: ',volumen)
//console.log('El segundo actual de: ',segundo)
//console.log('La cancion actual de: ',cancion)
//console.log('El autor es: ',autor)



// Des-Estructuracion de arreglos
const dbz : string[] = ['Goku','Vegeta','Trunsk'];
const [,,p3] = dbz;

//console.log('Personaje 1:',p1);
//console.log('Personaje 2:',p2);
console.log('Personaje 3:',p3);