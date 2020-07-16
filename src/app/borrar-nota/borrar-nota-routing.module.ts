import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarNotaPage } from './borrar-nota.page';

const routes: Routes = [
  {
    path: '',
    component: BorrarNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrarNotaPageRoutingModule {}
