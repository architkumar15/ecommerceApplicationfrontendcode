import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.myForm = this.fb.group({
      serviceName:[''],
      serviceEmail: [''],
      serviceUsername:[''],
      servicePassword:[''],
      servicecnfrPassword:[''],

    });
  }
  get formControls() { return this.myForm.controls; }  
  submitFormData(){
    
  }
}
