import { Plante } from "./Plante";

export class Categorie {
    nomCategorie : String; 
    plantes: Plante [];

    constructor(nomCategorie : string , plantes : Plante []){
        this.nomCategorie = nomCategorie; 
        this.plantes = plantes; 
    }
}