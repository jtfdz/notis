import { Component } from '@angular/core';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss', '../app.component.scss'],
})
export class DashboardPage {

  baseUrl: string = '/notas';	
  arr : any = [];
  nombre: string;


  constructor(public authService : AuthService)
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
       }



}
