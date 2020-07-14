import { Component } from '@angular/core';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss', '../app.component.scss'],
})
export class DashboardPage {

  constructor(
    public authService : AuthService) { }

  logout(){
    this.authService.presentAlertConfirm();
  }



}
