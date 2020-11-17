import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDocentePageRoutingModule } from './edit-docente-routing.module';

import { EditDocentePage } from './edit-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDocentePageRoutingModule,
        //agregar
        ReactiveFormsModule
  ],
  declarations: [EditDocentePage]
})
export class EditDocentePageModule {}
