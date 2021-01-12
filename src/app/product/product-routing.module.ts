import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BabykidComponent } from './babykid/babykid.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { HomefurnitueComponent } from './homefurnitue/homefurnitue.component';
import { MenComponent } from './men/men.component';
import { OfferzoneComponent } from './offerzone/offerzone.component';
import { SportsbookComponent } from './sportsbook/sportsbook.component';
import { TvsappliancesComponent } from './tvsappliances/tvsappliances.component';
import { WomenComponent } from './women/women.component';


const routes: Routes = [
  {
    path:'electronic',component:ElectronicComponent
  },
  {
    path:'tvs&appliances',component:TvsappliancesComponent
  },
  {
    path:'men',component:MenComponent
  },
  {
    path:'women',component:WomenComponent
  },
  {
    path:'baby&kids',component:BabykidComponent
  },
  {
    path:'home&furniture',component:HomefurnitueComponent
  },
  {
    path:'sports&book',component:SportsbookComponent
  },
  {
    path:'offerzone',component:OfferzoneComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
