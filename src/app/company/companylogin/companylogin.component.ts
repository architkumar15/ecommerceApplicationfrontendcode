import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent implements OnInit {
  mycompanyloginForm:FormGroup;


  constructor(private fb: FormBuilder)   { }

  ngOnInit() {
    this.companyloginform();
  
  }

  companyloginform(){this.mycompanyloginForm = this.fb.group({
    yourcompanyEmail:[''],
    yourcompanyPassword: [''],
  });
}
  get formControls() { return this.mycompanyloginForm.controls; }  
  submitFormData(){
    debugger;
    var data = this.mycompanyloginForm.value;
    this.companyloginform();
    
  }
}
