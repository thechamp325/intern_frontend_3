import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/_services';
import { FormBuilder  } from '@angular/forms';
import EmpData from '@app/shared/EmpData';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';;


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  des2:FormGroup;
  
 
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,  private authenticationService: AuthenticationService) { }
   
  ngOnInit() {
    this.des2 = this.formBuilder.group({
      empid:     ['Nilesh'],
      
      from_month:     ['january'],
      to_month:     ['feb', Validators.required],
      


      bm1:     ['january'],
      bm2:     [' ', Validators.required],
      bm3:     ['march', Validators.required],
      dp1:     ['january', Validators.required],
      dp2:     ['feb', Validators.required],
      dp3:     ['march', Validators.required],
      bm4:     ['april', Validators.required],
      bm5:     ['may', Validators.required],
      bm6:     ['jun', Validators.required],
      desig:     ['designation', Validators.required],
      dep:     ['department', Validators.required],
      date:     ['4/4/19', Validators.required],
      maindate:     ['4/4/19', Validators.required],
      m1:     ['month', Validators.required],
      m2:     ['month', Validators.required],
      m3:     ['month', Validators.required],
      m4:     ['month', Validators.required],
      m5:     ['moth', Validators.required],
      m6:     ['moth', Validators.required],



        });
  }

  onSubmit(){
    console.log(this.des2.value);
    this.http.post('http://10.10.14.236:8080/api/pi/emp', this.des2.value, ).subscribe(result => {alert(result)})
   
  }
}
