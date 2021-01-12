import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  myList: any=[
    {
      name: 'sdasd',
      class: 12
    },
    {
      name: 'two',
      class: 2
    },
    {
      name: 'three',
      class: 3
    }
  ]
  constructor() {
    console.info(this.myList);
   }

  ngOnInit() {
  }

}
