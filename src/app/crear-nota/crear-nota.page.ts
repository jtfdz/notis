import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.page.html',
  styleUrls: ['./crear-nota.page.scss', '../app.component.scss'],
})
export class CrearNotaPage {

	seleccionTipo: String = '1';
	ionicForm: FormGroup;
	baseUrl: string = '/nota/crear';	


  constructor(
    public authService : AuthService,
    public formBuilder: FormBuilder,
    private router: Router    
    ) { this.ionicForm = this.createMyForm(); }

  logout(){
    this.authService.presentAlertConfirm();
  }


//AGREGAR MÁS VALIDACIONES
  createMyForm(){
    return this.formBuilder.group({
      titulo: ['', Validators.required],    	
      tipo: ['', Validators.required],
      contenido: ['', Validators.required]
      });
  }

  clean(){
  	this.ionicForm.patchValue({contenido: ''});
  }

  volver(){
    this.authService.notaVolver();
    
  }


// COLOCAR UN MENSAJE LUEGO DE ÉXITO
  iniciar(){
	this.authService.postRequest(this.baseUrl, this.ionicForm.value)
    .then((response) => {
      console.log(response);
      switch(response['status']) { 
                case 200: { 
                      this.router.navigate(['/dashboard']); 
                      this.ionicForm.reset();
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
