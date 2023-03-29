/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['bash','counter','healing'];

interface Personaje{
    nombre: string;
    hp:number;
    habilidades: string[];
    pueblonatal?: string;
}

const personaje: Personaje = {
    nombre: 'strider',
    hp:100,
    habilidades:['bash', 'counter','heading']
}

personaje.pueblonatal='algo mas..';


console.table(personaje);