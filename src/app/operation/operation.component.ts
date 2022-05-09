import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/Model/Categorie';
import { Ordre } from 'src/Model/Ordre';
import { Type } from 'src/Model/Type';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {

  @Input()
  type: string = '';
  @Input()
  operation: string = '';
  @Input()
  nomX : string  = '';
  @Output()
  cancel: EventEmitter<boolean> = new EventEmitter();

  form : FormGroup; 

  constructor(private fb: FormBuilder, private planteService : PlantsService) {
    this.form = fb.group( {
      nom : new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {}

  hide() {
    this.cancel.emit();
  }
  


  submit(form : FormGroup){

    if(this.operation === "Ajouter"){
      // add
      if(this.type === "Categorie"){
        let categorie = new Categorie(form.value.nom, []); 
         this.addCategorie(categorie);
      }
      else if ( this.type === "Ordre"){
        let ordre = new Ordre(form.value.nom, []); 
        this.addOrdre(ordre);   
      }
      else if (this.type === "Type"){
        let type = new Type(form.value.nom, []); 
        this.addType(type)
      }
    }
    else if (this.operation === "Modifier"){
      // Update 
      if(this.type === "Categorie"){
        this.updateCategorie(form.value.nom); 
      } else if (this.type === "Ordre"){
        this.updateOrdre(form.value.nom); 
      }
      else if (this.type === "Type"){
        this.updateType(form.value.nom); 
      }

    }
  }


  addCategorie( categorie : Categorie){
    this.planteService.addCategorie(categorie).subscribe({
      next : (res) => {
        console.log('Ajout de la categories', res)
        if (res.status === 200) {
          console.log('Categorie added successfully');
          this.cancel.emit();
        } else {
          console.log('Categorie not added successfully');
        }},
      error : (err) => console.log('Erreur lors de l\'ajout categorie ', err)
    });
  }

  addOrdre(ordre : Ordre){ 
    this.planteService.addOrdre(ordre).subscribe({
      next : (res) => {
        console.log('Ajout de l\' ordre', res);
        if (res.status === 200) {
          console.log('Ordre added successfully');
          this.cancel.emit();
        } else {
          console.log('Ordre not added successfully');
        }},
      error : (err) => console.log('Erreur lors de l\'ajout ordre ', err)
    });
  }
  
  addType(type : Type){
    this.planteService.addType(type).subscribe({
      next : (res) => {
        console.log('Ajout de  type ', res)
        if (res.status === 200) {
          console.log('Type added successfully');
          this.cancel.emit();
        } else {
          console.log('Type not added successfully');
        }},
      error : (err) => console.log('Erreur lors de l\'ajout de type ', err)
    });
  }

  updateCategorie(name : string){
    this.planteService.getCategorieByName(this.nomX).subscribe(
      {
        next : (res) => {
          res.nomCategorie = name;
          this.planteService.updateCategorie(this.nomX , res).subscribe({
            next : (response) => {
              console.log('Modification de la categories', response)
              if (response.status === 200) {
                console.log('Modification added successfully');
                this.cancel.emit();
              } else {
                console.log('Modification not added successfully');
              }},
            error : (err) => console.log('Erreur lors de la modification categorie ', err)
          }); 
        },
        error : (err) => console.log('Erreur lors de la recuperation de categorie par le nom ', err)
      }
    );
  }

  updateOrdre(name: string){
    this.planteService.getOrdreByName(this.nomX).subscribe(
      {
        next : (res) => {
          res.nomOrdre = name; 
          this.planteService.updateOdre(this.nomX , res).subscribe({
            next : (res) => {
              console.log('Modification de l\'ordre ', res)
              if (res.status === 200) {
                console.log('Modification added successfully');
                this.cancel.emit();
              } else {
                console.log('Modification not added successfully');
              }},
            error : (err) => console.log('Erreur lors de la modification de l\'ordre ', err)
          }); 
        },
        error : (err) => console.log('erreur lors de la recuperation de categorie', err)
      }
    );

  }

  updateType(name : string){
    this.planteService.getTypeByName(this.nomX).subscribe(
      {
        next : (res) => {
          res.nomType = name; 
          this.planteService.updateType(this.nomX, res).subscribe({
            next : (res) => {
              console.log('Modification de type ', res)
              if (res.status === 200) {
                console.log('Modification added successfully');
                this.cancel.emit();
              } else {
                console.log('Modification not added successfully');
              }},
            error : (err) => console.log('Erreur lors de la modification de type ', err)
          });
        }, 
        error : (err) => console.log("Erreur lors de la recuperation de type", err)
        
      }
    );
  }


}


