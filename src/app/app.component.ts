import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceapplication2';
  iscart:boolean=false;
  constructor (private route:Router){

  }
  ngOnInit(){
    var currentUrl = window.location.href.split("/");
    var component = currentUrl[currentUrl.length-1];
    if (component == "servicecart"){
      this.iscart = true;
    }
  }
}
