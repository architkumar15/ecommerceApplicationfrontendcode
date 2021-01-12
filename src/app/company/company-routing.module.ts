import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompanyOrderComponent } from './company-order/company-order.component';
import { CompanyProductcategoryComponent } from './company-productcategory/company-productcategory.component';
import { CompanyProductstockComponent } from './company-productstock/company-productstock.component';
import { CompanySaleComponent } from './company-sale/company-sale.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';


const routes: Routes = [
  {
    path:'companyhome',component:CompanyHomeComponent
  },
  {
    path:'companyorder',component:CompanyOrderComponent
  },
  {
    path:'companyproductcategory',component:CompanyProductcategoryComponent
  },
  {
    path:'compnayproductstock',component:CompanyProductstockComponent
  },
  {
    path:'companysale',component:CompanySaleComponent
  },
  {
    path:'sellerlogin',component:CompanyloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
