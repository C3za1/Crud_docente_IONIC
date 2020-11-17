import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeDocentePage } from './make-docente.page';

const routes: Routes = [
  {
    path: '',
    component: MakeDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeDocentePageRoutingModule {}
