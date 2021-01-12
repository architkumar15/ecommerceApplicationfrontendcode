import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './global/error/error.component';


const routes: Routes = [
  {
    path: 'admin',loadChildren:() =>import('./admin/admin.module').then(a=>a.AdminModule)
  },
  {
    path:'seller',loadChildren:() =>import('./company/company.module').then(c=>c.CompanyModule)
  },
  {
    path:'service',loadChildren:()=>import('./service/service.module').then(s=>s.ServiceModule)
  },
  {
    path:'shared',loadChildren:()=>import('./shared/shared.module').then(sh=>sh.SharedModule)

  },
  {
    path:'product',loadChildren:()=>import('./product/product.module').then(p=>p.ProductModule)
  },
  {
    path:'',loadChildren:()=>import('./home/home.module').then(o=>o.HomeModule)
  },
  {
    path: '**',component:ErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
