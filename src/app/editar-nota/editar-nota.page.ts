import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.page.html',
  styleUrls: ['./editar-nota.page.scss', '../app.component.scss'],
})
export class EditarNotaPage implements OnInit  {

  id = null;
  ionicForm: FormGroup;
  baseUrl: String = '/nota/';
  titulo: String;
  tipo: String;
  contenido: String;

  constructor(
    public authService : AuthService,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,    
    private router: Router    
    ) { this.ionicForm = this.createMyForm(); }

  logout(){
    this.authService.presentAlertConfirm();
  }

   createMyForm(){
    return this.formBuilder.group({
      titulo: ['', Validators.required],    	
      contenido: ['', Validators.required]
      });
  }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  volver(){
    this.authService.notaVolver();
  }

  ionViewDidEnter(){
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

  editar(){
    this.authService.putRequest('/nota/' + this.id + '/editar', this.ionicForm.value)
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
