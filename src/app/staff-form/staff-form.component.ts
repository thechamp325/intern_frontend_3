import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

import {  Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder  } from '@angular/forms';
import EmpData from '@app/shared/EmpData';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {
  
  
  isLinear = false;
  EmpForm: FormGroup;
  des2: FormGroup;
  des3: FormGroup;
  des4: FormGroup;
  id: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,  private authenticationService: AuthenticationService) { }
    salutationControl = new FormControl('', [Validators.required]);



  


  ngOnInit(){
 

                  this.des2 = this.formBuilder.group({
                    pastteaching:     ['', Validators.required],
                    pastindustry:     ['', Validators.required],
                    pastresearch:     ['', Validators.required],
                    from1:     ['', Validators.required],
                    to1:     ['', Validators.required],
                    from2:     ['', Validators.required],
                    to2:     ['', Validators.required],
                    from3:     ['', Validators.required],
                    to3:     ['', Validators.required],
                  });

                  this.des3 = this.formBuilder.group({
                    nop:     ['', Validators.required],
                    id:     ['', Validators.required],
                    author:     ['', Validators.required],
                    nop_int:     ['', Validators.required],
                    nop_conf:     ['', Validators.required],
                    nop_intconf:     ['', Validators.required],
                    nob:     ['', Validators.required],
                    nopatents:     ['', Validators.required],
                    awarddets:     ['', Validators.required],
                    pggrant:     ['', Validators.required],
                  });

                  this.id = this.formBuilder.group({
                    id:     ['', Validators.required],
                  });


  }

  
  Submit(){
      console.log(this.des2.value);
      this.http.post('http://127.0.0.1:8080/api/pi/emp', this.des2.value, ).subscribe(result => {alert(result)})
    }

    Submit3(){
      console.log(this.des3.value);
      this.http.post('http://127.0.0.1:8080/api/pi/emp', this.des3.value, ).subscribe(result => {alert(result)})
    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  step=0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
