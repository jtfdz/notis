import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage {

  constructor(
    public authService : AuthService  
    ) { }

  logout(){
    this.authService.presentAlertConfirm();
  }

  volver(){
    this.authService.notaVolver();
  }

}
