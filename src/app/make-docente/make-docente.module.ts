import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeDocentePageRoutingModule } from './make-docente-routing.module';

import { MakeDocentePage } from './make-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeDocentePageRoutingModule,
        //agregar
        ReactiveFormsModule
  ],
  declarations: [MakeDocentePage]
})
export class MakeDocentePageModule {}
