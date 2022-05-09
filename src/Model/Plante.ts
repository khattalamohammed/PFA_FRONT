import { Image } from "./Image";

 
export class Plante {

    nomScientifique : string;
    nomCommun : string; 
    origine :  string;
    famille : string; 
    ordre : string; 
    exigences : string; 
    port : string; 
    hauteur : string; 
    categorie : string; 
    feuillage : string; 
    fleurs : string;
    fruits : string;  
    multiplication : string;
    utilisations : string; 
    soins : string; 
    nombreSujet : string;
    type : string;
    images : Image []; 
    // springImage : Image; 
    // summerImage : Image; 
    // automneImage : Image; 
    // winterImage : Image;

    constructor( 
        nomScientifique : string,
        nomCommun : string, 
        origine :  string,
        famille : string, 
        ordre : string, 
        exigences : string, 
        port : string, 
        hauteur : string, 
        categorie : string, 
        feuillage : string, 
        fleurs : string,
        fruits : string,  
        multiplication : string,
        utilisations : string, 
        soins : string, 
        nombreSujet : string,
        type : string,
        images : Image []){

        this.nomScientifique = nomScientifique;
        this.nomCommun  = nomCommun;  
        this.origine  = origine; 
        this.famille  = famille; 
        this.ordre = ordre;
        this.exigences = exigences;
        this.port  = port; 
        this.hauteur  = hauteur;
        this.categorie  = categorie; 
        this.feuillage = feuillage; 
        this.fleurs = fleurs;
        this.fruits = fruits;
        this.multiplication = multiplication;
        this.utilisations = utilisations; 
        this.soins = soins;
        this.nombreSujet = nombreSujet;
        this.type  = type;
        this.images = images; 
        }

}