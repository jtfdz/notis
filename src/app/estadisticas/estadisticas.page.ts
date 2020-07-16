import { Component } from '@angular/core';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss', '../app.component.scss'],
})
export class EstadisticasPage  {


  baseUrl: string = '/estadisticas';	
  arr : any = []; 
  tipo: String; 
  dia: String;   
  mes: String; 



  constructor(public authService : AuthService)
     {  }

  logout(){
    this.authService.presentAlertConfirm();
  }

  checkEmpty(value){
      if(value[0] === undefined) return "0";
      else return value[0]['count'];
    }

ionViewWillEnter(){
this.authService.getRequest(this.baseUrl)
    .then((response) => {
      switch(response['status']) { 
        case 200: {
          this.dia = this.checkEmpty(response['data'][1]);
					this.mes = this.checkEmpty(response['data'][2]);				
					switch(response['data'][0][0]['tipo_contenido']){  
						case 1:  this.tipo = "texto"; break; 
						case 2:  this.tipo = "imagen"; break; 
						case 3:  this.tipo = "recordatorio"; break; 
						}
            break; 
           } 
           default: { 
             console.log('ERROR. PROBLEMAS.');
             break; 
          } 
        }
    }).catch(error => {
        console.log(error);
        });

    }


  volver(){
    this.authService.notaVolver();
    
  }










}
