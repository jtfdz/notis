import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss', '../app.component.scss'],
})

export class RegistroPage {

  ionicForm: FormGroup;
  baseUrl: string = '/registro';

  constructor(private router: Router, public formBuilder: FormBuilder, public authService : AuthService) { this.ionicForm = this.createMyForm(); }

//AGREGAR MÁS VALIDACIONES
  createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', [Validators.required]],
      passwords: this.formBuilder.group({
        password: ['', [Validators.required]], 
        passwordconfirmation: ['', [Validators.required]]
      }, {validator: this.checkPasswords} )
      });
  }

  checkPasswords(group: FormGroup){
    return group.get('password').value === group.get('passwordconfirmation').value;
  }

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
