import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomerInfoComponent } from './customer-info/customer-info.component';

@NgModule({
  declarations: [
    CustomerInfoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomerInfoComponent,
  ]
})
export class ComponentsModule { }
