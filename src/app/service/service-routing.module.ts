import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';
import { ServiceCartComponent } from './service-cart/service-cart.component';
import { ServiceMenuComponent } from './service-menu/service-menu.component';
import { ServiceOrderComponent } from './service-order/service-order.component';
import { ServicePaymentComponent } from './service-payment/service-payment.component';


const routes: Routes = [
  {
    path:'servicecart',component:ServiceCartComponent
  },
  {
    path:'servicemenu',component:ServiceMenuComponent
  },
  {
    path:'serviceorder',component:ServiceOrderComponent
  },
  {
    path:'sevicepayment',component:ServicePaymentComponent
  },
  {
    path:'account',component:AccountComponent
  },
{
  path:'help',component:HelpComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
