import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  mysharedfrgtForm:FormGroup;
  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.sharedforgetform();
    
  }
 sharedforgetform(){this.mysharedfrgtForm = this.fb.group({
  sharedPassword:[''],
  sharedcnfrPassword: [''],
});

 }

  get formControls() { return this.mysharedfrgtForm.controls; }  
  submitFormData(){
    debugger;
    var data = this.mysharedfrgtForm.value;
    this.sharedforgetform();
  }
}

