import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedMenuComponent } from './shared-menu/shared-menu.component';
import { SharedOrderComponent } from './shared-order/shared-order.component';
import { SharedPaymentComponent } from './shared-payment/shared-payment.component';


const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'sharedmenu',component:SharedMenuComponent
  },
  {
    path:'sharedorder',component:SharedOrderComponent
  },
  {
    path:'sharedpayment',component:SharedPaymentComponent
  },
  {
    path:'forget',component:ForgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
