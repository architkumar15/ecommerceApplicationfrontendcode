import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminforgetpassword',
  templateUrl: './adminforgetpassword.component.html',
  styleUrls: ['./adminforgetpassword.component.css']
})
export class AdminforgetpasswordComponent implements OnInit {
  myForgetForm:FormGroup;
  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.forgetform();
    }
  
  forgetform(){ this.myForgetForm = this.fb.group({
    password:[''],
    newpassword: [''],
  });
}
  get formControls() { return this.myForgetForm.controls; }  

  submitData(){
    debugger;
    var data = this.myForgetForm.value;
    this.forgetform();
  }
}