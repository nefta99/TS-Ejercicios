/*
    ===== Código de TypeScript =====
*/

class PersonaReal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaReal{
    //alterEgo: string;
    //edad: number;
    //nombreReal:number;
    constructor(
        public alterEgo : string,
        public edad: number,
        public nombreReal: string )
        {
            super(nombreReal,'New York, USA');
         }
}

const ironman = new Heroe('IronMan',45,'Tony');
console.log(ironman);