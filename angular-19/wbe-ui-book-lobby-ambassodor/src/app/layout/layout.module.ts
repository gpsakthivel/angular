import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { LayoutRoutingModule } from './layout-routes';
import { AppMaterialModule } from '../app-material.moduler';



@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppMaterialModule
  ]
})
export class LayoutModule { }
