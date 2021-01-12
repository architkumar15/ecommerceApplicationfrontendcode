import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mysharedloginForm:FormGroup;
  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.sharedlogin();
    
  }
   sharedlogin(){this.mysharedloginForm = this.fb.group({
    sharedlogemail:[''],
    sharedlogpasword: [''],
  });

   }

  get formControls() { return this.mysharedloginForm.controls; }  
  submitFormData(){
    debugger;
    var data = this.mysharedloginForm.value;
    this.sharedlogin();
    
  }
}
