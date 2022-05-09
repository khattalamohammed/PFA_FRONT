import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categorie } from 'src/Model/Categorie';
import { Ordre } from 'src/Model/Ordre';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit {

@Output()
changeState: EventEmitter<boolean> = new EventEmitter();
@Output()
changeState2: EventEmitter<boolean> = new EventEmitter();
@Output()
nomX : EventEmitter<string> = new EventEmitter(); 

@Input() 
type !: string;  
@Input()
refreshData !: Observable<any>;  
liste !: any;
ordreList !: Ordre []; 
categorieList !: Categorie [];
form : FormGroup; 

  constructor(
    private plantService : PlantsService, 
    private fb : FormBuilder
    ) {
    
     this.form = this.fb.group(
       {searchName : new FormControl('')}
     ); 
  }

 

  ngOnInit(): void {
    
    if(this.type === "categorie"){
      this.plantService.refreshData.subscribe(
        () => { this.getAllCategories(); }
      ); 
     this.getAllCategories();
    }
    else if( this.type === "ordre"){
      this.plantService.refreshData.subscribe(
        () => { this.getAllOrdres(); }
      ); 
     this.getAllOrdres();
    }
    else if (this.type === "type"){
      this.plantService.refreshData.subscribe(
        () => { this.getAllTypes(); }
      ); 
     this.getAllTypes();
    }
  }


  search(form : FormGroup){
    
    if(form.value.searchName !== ""){
      if(this.type === 'ordre')
      this.plantService.getOrdreByName(form.value.searchName).subscribe(
        {
          next : res => { 
            if(res != null)
              this.liste = Array.of(res);
            else
            this.liste = null;  
          }
        }
      )
      else if (this.type === 'categorie')
        this.plantService.getCategorieByName(form.value.searchName).subscribe(
          {
            next : res => { 
            if(res != null)
              this.liste = Array.of(res); 
            else
              this.liste = null;   
            }
          }
        )
      else if (this.type === 'type')
        this.plantService.getTypeByName(form.value.searchName).subscribe(
          {
            next : res => { 
            if( res != null)
              this.liste = Array.of(res);
            else
              this.liste = null;   
            }
          }
        )
    }
    else{
      
      if(this.type === "categorie"){
        this.plantService.refreshData.subscribe(
          () => { this.getAllCategories(); }
        ); 
       this.getAllCategories();
      }
      else if( this.type === "ordre"){
        this.plantService.refreshData.subscribe(
          () => { this.getAllOrdres(); }
        ); 
       this.getAllOrdres();
      }
      else if (this.type === "type"){
        this.plantService.refreshData.subscribe(
          () => { this.getAllTypes(); }
        ); 
       this.getAllTypes();
      }
    }
      
  }

  edit(nomCategorie: string, nomOrdre : string, nomType : string): void {
    if(this.type === 'ordre')
      this.nomX.emit(nomOrdre);
    else if (this.type === 'categorie')
      this.nomX.emit(nomCategorie); 
    
    else if (this.type === 'type')
      this.nomX.emit(nomType);
      
    this.changeState.emit();
  }

  delete(nomCategorie : string, nomOrdre : string, nomType : string){
    if(this.type === 'ordre'){
     this.deleteOrdre(nomOrdre);
    } 
    else if (this.type === 'categorie'){
      this.deleteCategorie(nomCategorie); 
    }
    else if (this.type === 'type'){
      this.deleteType(nomType); 
    }
     
  }


  add() {
    this.changeState2.emit();
  }


  getAllCategories(){
    this.plantService.getAllCategories().subscribe(
      {
        next : (res) => {this.liste = res}, 
        error : (err) => { console.log("Erreur lors de la recuperation ", err); }
      }
    );
  }

  getAllOrdres(){
    this.plantService.getAllOrdres().subscribe(
      {
        next : (res) => {this.liste = res}, 
        error : (err) => { console.log("Erreur lors de la recuperation ", err); }
      }
    );
  }

  getAllTypes(){
    this.plantService.getAllTypes().subscribe(
      {
        next : (res) => this.liste = res,
        error : (err) => console.log('Erreur lors de la recuperation ', err)
      }
    );
  }


  deleteCategorie(nomCategorie : string){
    this.plantService.deleteCategorieByName(nomCategorie).subscribe(
      {
        next : (res) => console.log("Suppression de categorie reussit ", res),
        error : (err) => console.log("Erreur lors de la suppression de categorie ", err)
      }
    );
  }

  deleteOrdre(nomOrdre : string){
    this.plantService.deleteOrdreByName(nomOrdre).subscribe(
      {
        next : (res) => console.log('Suppression de ordre reuissit ', res), 
        error : (err) => console.log('Erreur lors de la suppression de l\'ordre ', err)
      }
    ); 
  }

  deleteType(nomType : string){
    this.plantService.deleteTypeByName(nomType).subscribe(
      {
        next : (res) => console.log("Suppression de type reussit ", res),
        error : (err) => console.log("Erreur lors de la suppression de type ", err)
      }
    );
  }
  
}
