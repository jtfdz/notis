import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.page.html',
  styleUrls: ['./crear-nota.page.scss', '../app.component.scss'],
})
export class CrearNotaPage {

	seleccionTipo: String = '1';


  constructor(
    public authService : AuthService) { }

  logout(){
    this.authService.presentAlertConfirm();
  }


}
