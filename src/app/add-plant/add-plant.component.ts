import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/Model/Categorie';
import { Ordre } from 'src/Model/Ordre';
import { Type } from 'src/Model/Type';
import { PlantsService } from '../plants.service';
  

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {

  planteFileNumber : any; 
  fleurFileNumber : any;
  feuilleFileNumber : any;
  fruitFileNumber : any;

  planteImage : any; 
  feuilleImage : any;
  fleurImage : any;
  fruitImage : any;
  form : FormGroup; 

  categorieList !: Categorie []; 
  ordreList !: Ordre []; 
  typeList !: Type [] ; 
  familleList : any; 

  constructor(
    private fb : FormBuilder, 
    private plantService: PlantsService, 
    private router : Router 
    ) {

    this.form = this.fb.group( {
      nomScientifique : new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[-'a-zA-ZÀ-ÖØ-öø-ÿ]+((\s)?((\'|\-|\.)?([-'a-zA-ZÀ-ÖØ-öø-ÿ])+))*$")])), 
      nomCommun : new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[-'a-zA-ZÀ-ÖØ-öø-ÿ]+((\s)?((\'|\-|\.)?([-'a-zA-ZÀ-ÖØ-öø-ÿ])+))*$")])),
      origine : new FormControl('', Validators.required), 
      famille : new FormControl('', Validators.required), 
      ordre : new FormControl('', Validators.required), 
      exigences : new FormControl('', Validators.required), 
      port : new FormControl('', Validators.required), 
      hauteur : new FormControl('', Validators.required), 
      categorie : new FormControl('', Validators.required), 
      feuillage : new FormControl('', Validators.required), 
      fleurs : new FormControl('', Validators.required),
      fruits : new FormControl('', Validators.required),  
      multiplication : new FormControl('', Validators.required),
      utilisations : new FormControl('', Validators.required), 
      soins : new FormControl('', Validators.required), 
      nombreSujet : new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])),
      type : new FormControl(''),
    });
   }

  ngOnInit(): void {
    this.getAllCategories(); 
    this.getAllOrdres(); 
    this.getAllTypes(); 
    this.getAllFamilles(); 
  }

  submit(form : FormGroup){
    const formData = new FormData();
 
    formData.append('nomScientifique', form.value.nomScientifique); 
    formData.append('nomCommun', form.value.nomCommun);       
    formData.append('origine', form.value.origine);       
    formData.append('famille', form.value.famille);       
    formData.append('ordre ', form.value.ordre);     
    formData.append('exigences', form.value.exigences); 
    formData.append('port', form.value.port); 
    formData.append('hateur', form.value.hauteur); 
    formData.append('categorie', form.value.categorie); 
    formData.append('feuillage', form.value.feuillage); 
    formData.append('fleurs', form.value.fleurs); 
    formData.append('fruits', form.value.fruits); 
    formData.append('multiplication', form.value.multiplication); 
    formData.append('utilisations', form.value.utilisations);
    formData.append('soins', form.value.soins);
    formData.append('nombreSujet', form.value.nombreSujet);
    formData.append('type', form.value.type);
    formData.append('planteImage', this.planteImage);    
    formData.append('feuilleImage', this.feuilleImage);    
    formData.append('fleurImage', this.fleurImage);    
    formData.append('fruitImage', this.fruitImage);    



    this.plantService.addPlant(formData).subscribe(
      {
        next: (response) => {
          console.log('Response ', response); 
          this.router.navigate(['plantes']); 
        },
        error: (e) => console.error('Error', e),
      }    
    );
    
  }




  uploadImagePlante(event: any){
    this.planteImage = event.target.files[0]; 
    this.planteFileNumber =  event.target.files.length; 
  }

  uploadImageFleur(event: any){
    this.fleurImage = event.target.files[0]; 
    this.fleurFileNumber =  event.target.files.length; 
    
  }

  uploadImageFeuille(event: any){
    this.feuilleImage = event.target.files[0]; 
    this.feuilleFileNumber =  event.target.files.length; ;
    
  }

  uploadImageFruit(event: any){
    this.fruitImage = event.target.files[0]; 
    this.fruitFileNumber =  event.target.files.length; 
    
  }


  getAllCategories(){
    this.plantService.getAllCategories().subscribe(
      {
        next : (res) => {this.categorieList = res ; console.log('categorieList :', res);
        }, 
        error : (err) => { console.log("Erreur lors de la recuperation ", err); }
      }
    );
  }

  getAllOrdres(){
    this.plantService.getAllOrdres().subscribe(
      {
        next : (res) => {this.ordreList = res;  }, 
        error : (err) => { console.log("Erreur lors de la recuperation de l'ordre ", err); }
      }
    );
  }

  getAllTypes(){
    this.plantService.getAllTypes().subscribe(
      {
        next : (res) => { this.typeList = res; 
        },
        error : (err) => console.log('Erreur lors de la recuperation ', err)
      }
    );
  }

  getAllFamilles(){
    this.plantService.getAllFamilles().subscribe(
      {
        next : (res) => {  
          this.familleList = res.body; 
          console.log("recuperation famille  ", this.familleList);
          
        }, 
        error : (err) => console.log("Erreur lors de la recuperation de famille  ", err)
        
      }
    )
  }

  
}
