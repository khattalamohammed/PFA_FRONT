import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plante } from 'src/Model/Plante';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-plantes',
  templateUrl: './plantes.component.html',
  styleUrls: ['./plantes.component.css']
})

export class PlantesComponent implements OnInit {

  isVisible: boolean = false;
  add: boolean = false;
  planteList !: Plante [];
  isExist : Boolean = false; 

  constructor(
    private route: Router, 
    private planteService : PlantsService, 
    private router : ActivatedRoute
    ) { }

  ngOnInit(){
    //this.getAllPlants();
    let name = this.router.snapshot.paramMap.get("id"); 
    this.getPlantByFamilyName(name); 
  }

  show() {
    this.isVisible = true;
  }
  
  hide() {
    this.isVisible = false;
    this.add = false;
  }
  new() {
    this.add = true;
  }

  moveToPlant(){
    this.route.navigate(['edit-plant']);
  }

  edit(scientificName: string){
    this.route.navigate(['edit-plant', scientificName]);
  }

  addPlant(){
    this.route.navigate(['add']);
  }


  getAllPlants(){
    this.planteService.getAllPlants().subscribe(
      {
        next : (res) => {
          this.planteList = res ;
          console.log("recuperation des plantes dans PlantesComponent ", this.planteList); 
        },
        error : (err) => console.log("Erreur lors de la recuperation des plantes dans PlantesComponent ", err)
        
      }
    ) 
  }

  getPlantByFamilyName(name :  any){
    this.planteService.getPlantByFamilyName(name).subscribe(
      {
        next : (res) => {
          this.planteList = res ; 
          console.log("Recupertion de des plante de la famil", this.planteList); 
          if(this.planteList.length === 0)
            this.isExist = true;
        }, 
        error : (err) => console.log("Erreur lors de la recuperation ", err)
      }
    )
  }

  delete(name : string ){
    this.planteService.deletePlantByName(name).subscribe(
      {
        next : (res) => {
          console.log("Suppression reussit ", res); 
          this.getAllPlants(); 
        }, 
        error : (err) => console.log("Erreur de suppression ")
        
      }
    )
  }
}
