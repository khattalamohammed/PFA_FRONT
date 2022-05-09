import { Plante } from "./Plante";

export class Type {
    nomType : string; 
    plantes : Plante []; 

    constructor(nomType : string, plantes : Plante []){
        this.nomType = nomType; 
        this.plantes = plantes;
    }
}