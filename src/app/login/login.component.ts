import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup; 

  constructor(
    private fb: FormBuilder, 
    private planteService : PlantsService, 
    private router : Router) { 

    this.form = this.fb.group({
      fullName : new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[-'a-zA-ZÀ-ÖØ-öø-ÿ]+((\s)?((\'|\-|\.)?([-'a-zA-ZÀ-ÖØ-öø-ÿ])+))*$")])), 
      password : new FormControl('', Validators.required), 
    }); 

  }

  ngOnInit(): void {
  }

  login(f:FormGroup){
  
    const data  = {"userName": f.value.fullName, "password": f.value.password}; 

    this.planteService.logIN(data).subscribe(
      {
        next: (res) => {console.log("respooo", res);   },
        error: (error) => console.log("errrrr",error)
      }
    )


    this.router.navigate(['/familles']);
   

  }

}
