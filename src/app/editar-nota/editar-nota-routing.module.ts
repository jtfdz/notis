import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarNotaPage } from './editar-nota.page';

const routes: Routes = [
  {
    path: '',
    component: EditarNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarNotaPageRoutingModule {}
