import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceCartComponent } from './service-cart/service-cart.component';
import { ServiceMenuComponent } from './service-menu/service-menu.component';
import { ServiceOrderComponent } from './service-order/service-order.component';
import { ServicePaymentComponent } from './service-payment/service-payment.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [ServiceCartComponent, ServiceMenuComponent, ServiceOrderComponent, ServicePaymentComponent, AccountComponent, HelpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
