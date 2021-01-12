import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCompanymenuComponent } from './admin-companymenu/admin-companymenu.component';
import { AdminforgetpasswordComponent } from './adminforgetpassword/adminforgetpassword.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';


const routes: Routes = [
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'adminregister',component:AdminregisterComponent
  },
  {
    path:'forgetpassword',component:AdminforgetpasswordComponent
  },
  {
    path:'companymenu',component:AdminCompanymenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
