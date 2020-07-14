import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
  	private http : HttpClient,
  	private router: Router, 
  	public alertController: AlertController
  	) { }

  public postRequest(url, grupoForma) {
    return this.http.post(this.baseUrl + url, grupoForma, { withCredentials: true }).toPromise()
  }

  public getRequest(url) {
    return this.http.get(this.baseUrl + url, { withCredentials: true }).toPromise()
  }

   async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿desea cerrar sesión?',
      //message: '',
      buttons: [
        {
          text: 'no',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'sí',
          handler: () => {
            this.getRequest('/logout')
            .then((response) => {
              this.router.navigate(['/home']); 
            }).catch(error => {
                console.log(error);
              });
          }
        }
      ]
    });
    await alert.present();
  }




  
}