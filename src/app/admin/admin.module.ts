import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCompanymenuComponent } from './admin-companymenu/admin-companymenu.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminforgetpasswordComponent } from './adminforgetpassword/adminforgetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminCompanymenuComponent,  AdminloginComponent, AdminregisterComponent, AdminforgetpasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
