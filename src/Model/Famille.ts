export class Famille {
    image : FormData; 
    nomFamille : string; 
    retrievedImage ?: any; 

    constructor(image : FormData, nomFamille : string){
        this.image = image; 
        this.nomFamille = nomFamille; 
    }
}