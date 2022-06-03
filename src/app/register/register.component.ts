import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  form : FormGroup; 

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private planteService: PlantsService) {

    this.form = this.fb.group({
      fullName : new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[-'a-zA-ZÀ-ÖØ-öø-ÿ]+((\s)?((\'|\-|\.)?([-'a-zA-ZÀ-ÖØ-öø-ÿ])+))*$")])), 
      email : new FormControl('', Validators.required), 
      phone : new FormControl('', Validators.required), 
      password : new FormControl('', Validators.required), 
    }); 


   }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/register'])
  }

  signUp(f : FormGroup){

   const data  = {"userName": f.value.fullName, "password": f.value.password}; 

   this.planteService.signUp(data).subscribe(
     {
       next: (res) => {console.log("respooo", res);  this.router.navigate(['/familles']); },
       error: (error) => console.log("errrrr",error)
     }
   )

  }
  
}
