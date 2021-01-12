import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  MyregisterForm:FormGroup;
  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.registerForm();
    
  }
  registerForm(){this.MyregisterForm = this.fb.group({
    registerName:[''],
    regiserEmail: [''],
    registerUsername: [''],
    registerPassword: [''],
    registerCofmpassword: [''],
  });

  }
  get formControls() { return this.MyregisterForm.controls; }  
  submitFormData(){
    debugger;
    var data = this.MyregisterForm.value;
    this.registerForm();
  }

}
