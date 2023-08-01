import { ClassComponent } from './class.component';
import { ClassRoutingModule } from './class-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ClassComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    SharedModule,
  ]
})
export class ClassModule { }
