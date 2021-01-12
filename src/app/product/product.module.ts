import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ElectronicComponent } from './electronic/electronic.component';
import { TvsappliancesComponent } from './tvsappliances/tvsappliances.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BabykidComponent } from './babykid/babykid.component';
import { HomefurnitueComponent } from './homefurnitue/homefurnitue.component';
import { SportsbookComponent } from './sportsbook/sportsbook.component';
import { OfferzoneComponent } from './offerzone/offerzone.component';


@NgModule({
  declarations: [ElectronicComponent, TvsappliancesComponent, MenComponent, WomenComponent, BabykidComponent, HomefurnitueComponent, SportsbookComponent, OfferzoneComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
