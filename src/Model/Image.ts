export class Image {
    id : number; 
    imgBytes : FormData;
    saison : string; 

    constructor( id : number, imgBytes : FormData, saison : string){
        this.id = id; 
        this.imgBytes = imgBytes; 
        this.saison = saison; 
    }
}