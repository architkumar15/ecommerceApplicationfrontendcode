import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-companymenu',
  templateUrl: './admin-companymenu.component.html',
  styleUrls: ['./admin-companymenu.component.css']
})
export class AdminCompanymenuComponent implements OnInit {
  showForm : boolean = false;
  newCompanyForm : FormGroup;

  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.initiliseForm();
  }
  initiliseForm(){
    this.newCompanyForm = this.fb.group({
      companyId:[''],
      companyName: ['',Validators.compose([Validators.required,Validators.pattern(/^[A-Za-z]+$/),Validators.maxLength(25)])],
      companyAddress:[''],
      companyTitle:[''],
      companyOwner:[''],
      companyMobile:['',Validators.compose([Validators.required,Validators.pattern(/^[A-Za-z0-9]+$/),Validators.maxLength(15)])],
      companyEmail: ['',Validators.compose([Validators.required,Validators.pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)])],
      companyType:[''],
    });
  }
  get formControls() { return this.newCompanyForm.controls; }  
  addCompany(){
    this.showForm = !this.showForm;
  }

  updateCompany(){
    this.showForm= !this.showForm;
  }

  submitData(){
    debugger;
    var data = this.newCompanyForm.value;
    this.initiliseForm();
  }
}
