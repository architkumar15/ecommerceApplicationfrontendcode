import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedMenuComponent } from './shared-menu/shared-menu.component';
import { SharedOrderComponent } from './shared-order/shared-order.component';
import { SharedPaymentComponent } from './shared-payment/shared-payment.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ConditionComponent } from './condition/condition.component'


@NgModule({
  declarations: [LoginComponent, SharedMenuComponent, SharedOrderComponent, SharedPaymentComponent, RegisterComponent, ForgetComponent, ConditionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule
   
  ]
})
export class SharedModule { }
