import { Plante } from "./Plante";

export class Ordre {
    nomOrdre : String; 
    plantes : Plante []; 

    constructor( nomOrdre : String, plantes : Plante []){
        this.nomOrdre = nomOrdre; 
        this.plantes = plantes; 
    }
}