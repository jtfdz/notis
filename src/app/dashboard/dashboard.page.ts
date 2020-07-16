import { Component } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss', '../app.component.scss'],
})
export class DashboardPage {

  baseUrl: string = '/notas';	
  arr : any = [];
  nombre: string;
  borrado: boolean = false;  
  editado: boolean = false; 


  constructor(
    public authService : AuthService,
    private router: Router)
     {  }


  logout(){
    this.authService.presentAlertConfirm();
  }

    ionViewWillEnter(){
  	this.authService.getRequest(this.baseUrl)
        .then((response) => {
          switch(response['status']) { 
                    case 200: { 
                    	for (let entry of response['data']){
                    		this.arr.push(entry);
                    	}

                       break; 
                     } 
                     default: { 
                       console.log('pelaste man');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });

        }

        

   reorderItems(indexes){
   	
   }






  ionViewDidLeave(){
  	this.arr = [];
    this.borrado = false;
    this.editado = false;   
  }


  pin(notas){
    console.log(notas);
  }

  //pagina nueva
  editar(notas){
    console.log(notas);
  }  

  activarBorrado(){
    this.borrado = !this.borrado;
  }

  activarEditado(){
    this.editado = !this.editado;
  }









}
