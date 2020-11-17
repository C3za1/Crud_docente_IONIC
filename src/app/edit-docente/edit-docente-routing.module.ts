import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDocentePage } from './edit-docente.page';

const routes: Routes = [
  {
    path: '',
    component: EditDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDocentePageRoutingModule {}
