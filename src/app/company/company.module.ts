import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyOrderComponent } from './company-order/company-order.component';
import { CompanyProductcategoryComponent } from './company-productcategory/company-productcategory.component';
import { CompanyProductstockComponent } from './company-productstock/company-productstock.component';
import { CompanySaleComponent } from './company-sale/company-sale.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyHomeComponent } from './company-home/company-home.component';


@NgModule({
  declarations: [ CompanyOrderComponent, CompanyProductcategoryComponent, CompanyProductstockComponent, CompanySaleComponent, CompanyloginComponent, CompanyHomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
