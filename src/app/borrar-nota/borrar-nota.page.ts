import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-nota',
  templateUrl: './borrar-nota.page.html',
  styleUrls: ['./borrar-nota.page.scss', '../app.component.scss'],
})
export class BorrarNotaPage {

	id = null;
	baseUrl: String = '/nota/';
	titulo: String;
	tipo: String;
	contenido: String;

  constructor(
  	public authService : AuthService,
  	private activatedRoute: ActivatedRoute,
  	private router: Router
  	) { }

	volver(){
	   this.authService.notaVolver();
	}

	ngOnInit(){
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
	}

	ionViewWillEnter(){
  	this.authService.getRequest(this.baseUrl + this.id)
        .then((response) => {
          switch(response['status']) { 
                    case 200: { 
                    	this.titulo = response['data'][0]['titulo'];
						this.tipo = response['data'][0]['tipo_contenido'];                    	
                    	this.contenido = response['data'][0]['contenido'];
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

	  borrar(){
		  this.authService.deleteRequest('/notas/' + this.id + '/borrar')
		          .then((response) => {
		            console.log(response)
		            switch(response['status']) { 
		                      case 200: { 
		                        this.router.navigate(['/dashboard']); 
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








 
}
