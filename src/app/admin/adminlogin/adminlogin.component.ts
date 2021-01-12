import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  myloginForm:FormGroup;
  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.loginform();
  
  }

  loginform(){this.myloginForm = this.fb.group({
    yourEmail:[''],
    yourPassword: [''],
  });
}
  get formControls() { return this.myloginForm.controls; }  
  submitFormData(){
    debugger;
    var data = this.myloginForm.value;
    this.loginform();
    
  }
}
