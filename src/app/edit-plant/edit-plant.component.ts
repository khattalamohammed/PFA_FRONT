import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/Model/Categorie';
import { Ordre } from 'src/Model/Ordre';
import { Plante } from 'src/Model/Plante';
import { Type } from 'src/Model/Type';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css']
})
export class EditPlantComponent implements OnInit {

  id : any; 
  plant !: Plante; 

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
  typeList !: Type []; 
  familleList : any; 


  constructor(
    private route : ActivatedRoute, 
    private fb : FormBuilder, 
    private planteService: PlantsService, 
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
    this.id = this.route.snapshot.paramMap.get('id'); 
    console.log(this.id); 
    this.getAllCategories();
    this.getAllFamilles();
    this.getAllOrdres();
    this.getAllTypes(); 
    
  }

  submit(form : FormGroup){

    const planteInfo = form.value; 
    const formData = new FormData();
    console.log(planteInfo);

    // formData.append('planteInfo', JSON.stringify(planteInfo)); 
    // formData.append('', this.selectedFiles);

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



    this.planteService.updatePlant(this.id,formData).subscribe(
      {
        next: (response) => {
          console.log('Response for updated ', response); 
          this.router.navigate(['plantes']); 
        },
        error: (e) => console.error('Error', e),
      }    
    );
   

  }

  getPlantById( id : string){
    this.planteService.getPlantByName(id).subscribe(
      {
        next : (res) => {
          console.log("recuperation de plante par id ", res); 
          this.plant = res; 
        },
        error : (err) => console.log("Erreur lors de la recuperation de plante par id  ", err)
        
      }
    )
  }


  
  uploadImageSpring(event: any){
    this.springImage = event.target.files[0]; 
    this.springFileNumber =  event.target.files.length; 
    console.log(this.springImage);
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
    this.planteService.getAllCategories().subscribe(
      {
        next : (res) => {this.categorieList = res ; console.log('categorieList :', res);
        }, 
        error : (err) => { console.log("Erreur lors de la recuperation ", err); }
      }
    );
  }

  getAllOrdres(){
    this.planteService.getAllOrdres().subscribe(
      {
        next : (res) => {this.ordreList = res;  }, 
        error : (err) => { console.log("Erreur lors de la recuperation de l'ordre dans AddPlantComponent ", err); }
      }
    );
  }

  getAllTypes(){
    this.planteService.getAllTypes().subscribe(
      {
        next : (res) => { this.typeList = res; 
        },
        error : (err) => console.log('Erreur lors de la recuperation de tableComponent')
      }
    );
  }

  getAllFamilles(){
    this.planteService.getAllFamilles().subscribe(
      {
        next : (res) => {  
          this.familleList = res.body; 
          console.log("recuperation famille dans AddPlantComponent ", this.familleList);
          
        }, 
        error : (err) => console.log("Erreur lors de la recuperation de famille dans  AddPlanrtComponent ", err)
        
      }
    )
  }


}
