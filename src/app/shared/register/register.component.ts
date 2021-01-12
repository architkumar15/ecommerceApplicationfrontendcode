import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mysharedregisterForm:FormGroup;
  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.sharedregister();
    
  }

  sharedregister(){this.mysharedregisterForm = this.fb.group({
    sharedRegistername:[''],
    sharedRegisteremail: [''],
    sharedRegisterusername:[''],
    sharedRegisterpassword:[''],
    sharedRegistercnfrpassword:[''],
  });

  }
  get formControls() { return this.mysharedregisterForm.controls; }  
  submitFormData(){
    debugger;
    var data = this.mysharedregisterForm.value;
    this.sharedregister();
    
  }

}
