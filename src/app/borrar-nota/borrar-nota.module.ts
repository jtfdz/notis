import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarNotaPageRoutingModule } from './borrar-nota-routing.module';

import { BorrarNotaPage } from './borrar-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarNotaPageRoutingModule
  ],
  declarations: [BorrarNotaPage]
})
export class BorrarNotaPageModule {}
