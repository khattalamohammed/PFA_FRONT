import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from 'src/Model/Categorie';
import { Famille } from 'src/Model/Famille';
import { Ordre } from 'src/Model/Ordre';
import { Plante } from 'src/Model/Plante';
import { Type } from 'src/Model/Type';


@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient){} 

  private refresh = new Subject<void>(); 

  get refreshData (){
    return this.refresh;
  }


  // sign up 

  signUp(data: any){
	
  // const headers= new HttpHeaders().set('Access-Control-Allow-Origin','http://localhost:4200/'); 
    return this.http.post(environment.serverUrl + "signup", data, { observe: 'response', responseType : 'text'}); 
  }

  // login 

  logIN(data: any){
    return this.http.post(environment.serverUrl + "login", data, { observe: 'response', responseType : 'text'}); 
  }

  // plant

  addPlant(formData : FormData){
    return this.http.post(environment.serverUrl+'plante/add', formData, { observe : 'response', responseType :'text'}) ; 
  }

  getPlantByName(name : string){ 
    return this.http.get<Plante>(environment.serverUrl +'plante/'+ name);
  }

  getAllPlants(){
    return this.http.get<Plante [] >(environment.serverUrl + 'plante'); 
  }

  getPlantByFamilyName(name : string ){
    return this.http.get<Plante []>(environment.serverUrl + 'famille/' + name + '/plantes'); 
  }

  /// a revoir avec la base de donnée
  updatePlant(name : string, formData  :FormData){
    return this.http.put(environment.serverUrl + "plante/update/" + name, formData, { observe : 'response', responseType : 'text'});
  }

  /// a revoir avec la base de donnée
  deletePlantByName(name : string){
    return this.http.delete(environment.serverUrl + 'plante/delete/' + name, { observe  : 'response', responseType : 'text'});
  }

  //famille 

  addFamille(famille : any){
    return this.http.post(environment.serverUrl + 'famille/add', famille,  { observe: 'response', responseType : 'text' } )
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
  ); 
  }

  getAllFamilles(){
    return this.http.get<Famille []>(environment.serverUrl + 'famille', { observe : 'response'}); 
  }

  getFamilleByName(name : string){
    return this.http.get<Famille>(environment.serverUrl + 'famille/' + name,  {observe : 'response' }); 
  }

  updateFamille(id : string, formData : FormData){
    return this.http.put(environment.serverUrl + 'famille/update/' +id, formData, { observe : 'response', responseType : 'text'})
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
  ); 
  }

  deleteFamilleByName(name : string){
    return this.http.delete(environment.serverUrl + 'famille/delete/' + name,  { observe : 'response', responseType: 'text'})
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
  );
  }

  // categorie

  addCategorie(categorie: Categorie){
    return this.http.post(environment.serverUrl + 'categorie/addCategorie', categorie , { observe: 'response', responseType : 'text' })
    .pipe(
        tap(
          () => {this.refresh.next(); }
        )
    );
  }

  getCategorieByName(name : string){
    return this.http.get<Categorie>(environment.serverUrl + 'categorie/' + name);
  }  

  getAllCategories(){
    return this.http.get<Categorie []>(environment.serverUrl + 'categorie/listeCategorie');
  }

  updateCategorie(name : string , categorie : Categorie){
    return this.http.put(environment.serverUrl+'categorie/' + name, categorie , { observe: 'response', responseType : 'text' })
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
  );
  }

  deleteCategorieByName(name : string){
    return this.http.delete(environment.serverUrl + 'categorie/'+ name, { observe : 'response', responseType : 'text'})
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
    );
  }

  
  // ordre
  addOrdre(ordre : Ordre ){
    return this.http.post(environment.serverUrl + 'ordre/addOrdre', ordre , { observe: 'response', responseType : 'text' });
  }

  getOrdreByName(name : string){
    return this.http.get<Ordre>(environment.serverUrl + 'ordre/' + name); 
  }

  getAllOrdres(){
    return this.http.get<Ordre []>(environment.serverUrl + 'ordre/listeOrdre');
  }

  updateOdre(name: string, ordre : Ordre){
    return this.http.put(environment.serverUrl + 'ordre/' + name, ordre, {observe : 'response', responseType: 'text'})
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
  );
  }

  deleteOrdreByName(name : string){
    return this.http.delete(environment.serverUrl + 'ordre/' + name, { observe : 'response', responseType : 'text'})
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
  );
  }

  // type 

  addType(type : Type){
    return this.http.post(environment.serverUrl + 'type/addType', type, { observe : 'response', responseType : 'text'} )
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
    );
  }

  getTypeByName(name: string){
    return this.http.get<Type>(environment.serverUrl + 'type/' + name); 
  }

  getAllTypes(){
    return this.http.get<Type []>(environment.serverUrl + 'type/listeType'); 
  }

  updateType(name : string, type : Type){
    return this.http.put(environment.serverUrl + 'type/'+ name, type, { observe : 'response',responseType : 'text' })
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
  );
  }

  deleteTypeByName(name : string){
    return this.http.delete(environment.serverUrl + 'type/'+ name, { observe : 'response', responseType : 'text'})
    .pipe(
      tap(
        () => {this.refresh.next(); }
      )
  );
  }

}
