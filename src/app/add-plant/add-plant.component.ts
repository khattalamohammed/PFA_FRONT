import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/Model/Categorie';
import { Famille } from 'src/Model/Famille';
import { Ordre } from 'src/Model/Ordre';
import { Type } from 'src/Model/Type';
import { PlantsService } from '../plants.service';
  

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {

  springFileNumber : any; 
  summerFileNumber : any;
  automneFileNumber : any;
  winterFileNumber : any;

  springImage : any; 
  summerImage : any;
  automneImage : any;
  winterImage : any;
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
    formData.append('springFile', this.springImage);    
    formData.append('automneFile', this.automneImage);    
    formData.append('summerFile', this.summerImage);    
    formData.append('winterFile', this.winterImage);    



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




  uploadImageSpring(event: any){
    this.springImage = event.target.files[0]; 
    this.springFileNumber =  event.target.files.length; 
  }

  uploadImageSummer(event: any){
    this.summerImage = event.target.files[0]; 
    this.summerFileNumber =  event.target.files.length; 
    
  }

  uploadImageAutomne(event: any){
    this.automneImage = event.target.files[0]; 
    this.automneFileNumber =  event.target.files.length; ;
    
  }

  uploadImageWinter(event: any){
    this.winterImage = event.target.files[0]; 
    this.winterFileNumber =  event.target.files.length; 
    
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
