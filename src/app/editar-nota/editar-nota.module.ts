import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarNotaPageRoutingModule } from './editar-nota-routing.module';
import { EditarNotaPage } from './editar-nota.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    IonicModule,
    EditarNotaPageRoutingModule
  ],
  declarations: [EditarNotaPage]
})
export class EditarNotaPageModule {}
