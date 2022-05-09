import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Famille } from 'src/Model/Famille';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-familles',
  templateUrl: './familles.component.html',
  styleUrls: ['./familles.component.css']
})
export class FamillesComponent implements OnInit {

  // isVisible: boolean = false;
  add: boolean = false;
  listFamille : any;
  fileSelected : any;
  number: any;
  form : FormGroup; 
  operation : string = ''; 
  nomFamille : string = ''; 

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(
    private route :  Router, 
    private plantService : PlantsService, 
    private fb: FormBuilder, 
    ) {
      this.form = fb.group({
        nomFamille : new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]*')])),
        familleFile : new FormControl('', Validators.required)
      })
    }

  ngOnInit(): void {
    this.getAllFamilles();     
  }


  getAllFamilles(){
    this.plantService.getAllFamilles().subscribe(
      {
        next : (res ) => {
          const  familles = res.body; 
          console.log('recuperation des familles : ', familles);
       
          familles?.map(
            famille => famille.retrievedImage = 'data:image/jpeg;base64,' + famille.image 
          );
          this.listFamille = familles; 
        }, 
        error : (err) => console.log("Erreur lors de la recuperation de la liste des familles ", err)
      }
    ); 
  }

  // modification et suppression 


  hide() {
    // this.isVisible = false;
    this.add = false;
  }


  new() {
    this.add = true;
    this.operation = "Ajout nouvelle famille";
  }

  moveToPlants(name : string){
    this.route.navigate(['plantes', name]);     
  }

  uploadImageFamille(event: any){
    this.fileSelected = event.target.files[0];
    this.number = event.target.files.length;
    console.log(this.fileSelected);
    
  }

  submit(form: FormGroup){

    let formData = new FormData(); 
    formData.append('file', this.fileSelected);
    formData.append('nomFamille', form.value.nomFamille); 
    
    if(this.operation === "Ajout nouvelle famille")
      this.addFamille(formData); 
    else if(this.operation === "Modification famille")
      this.updateFamille(this.nomFamille, formData); 
    this.add = false; 
  }

  edit(name: string ){
    this.operation = "Modification famille";
    this.add  = true; 
    this.nomFamille = name;
    console.log(this.nomFamille);
  }

  delete(name :string) {
    this.plantService.deleteFamilleByName(name).subscribe(
      {
        next : (res) => {console.log("suppression famille reussit : ", res); this.getAllFamilles()},
        error : (err  ) => console.log('Erreur de suppression de famille', err) 
      }
    )
  }

  addFamille(formData : FormData){
    this.plantService.addFamille(formData).subscribe(
      {
        next : (res) => {console.log('Ajout famille reussit ', res), this.getAllFamilles(); }, 
        error : (err) => console.log('Erreur lors de l\'ajout famille', err)
      }
    ); 
  }

  getFamilleByName(name : string){
    this.plantService.getFamilleByName(name).subscribe(
      {
        next : (res) => console.log('recherche famille par nom ', res.body),
        error : (err) => console.log('Erreur lors de la recherche par nom ', err)
      }
    )
  }

  updateFamille(name: string , formData : FormData){
    this.plantService.updateFamille(name, formData).subscribe(
      {
        next : (res) => {console.log('Modification famille reussit ', res); this.getAllFamilles(); },
        error : (err) => console.log('Erreur lors de la modification famille', err)
      }
    ); 
  }

  
}
