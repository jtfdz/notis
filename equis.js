1. IMPLEMENTAR SERVICIOS DIOS



                <div class="smallit"><ion-label color="primary" position="stacked" size="small">*aparecerá en tope de dashboard</ion-label></div>
smallit{
  width: 35%
}

<ion-button [routerLink]="['/inicio']" color="dark">Inicio de Sesión<ion-icon slot="end" name="star"></ion-icon></ion-button>


<ion-button   color="warning">Warning</ion-button>


        <ion-item-options> 

          <ion-button icon-only (click)="borrar(notas)" color="danger"><ion-icon name="trash"></ion-icon></ion-button>
        </ion-item-options>


    <ion-list >
      <ion-item-sliding *ngFor="let notas of arr">
        <ion-item>

          <ion-label color="dark">{{notas.titulo}}</ion-label>  
          <ion-label color="primary">{{notas.contenido}}</ion-label> 

        </ion-item>  
        <ion-item-options> 
          <ion-button icon-only (click)="pin(notas)" color="danger"><ion-icon name="trash"></ion-icon></ion-button>
          <ion-button icon-only (click)="borrar(notas)" color="danger"><ion-icon name="trash"></ion-icon></ion-button>
        </ion-item-options>
        </ion-item-sliding>
    </ion-list>





<ion-footer class="ion-no-border">

</ion-footer>




router.post('/registrar', check('nombre').isLength({min: 3}), check('contraseña').isLength({min: 3}),
check('alias').isLength({min: 3}), check('correo').isLength({min: 3}), check('descripcion').isLength({min: 3}),

check('correo').custom(value => { return user.checkingEmail(value).then(user =>{if(user){ return Promise.reject('Correo en existencia.'); } } )}),
check('alias').custom(value => { return user.getUserByUsername(value).then(user =>{if(user){ return Promise.reject('Alias en existencia. Intente con un alias diferente.'); } } )}),

check('correo').isEmail(), auth.isLogged, function(req, res){

    const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }

    user.registrarUsuario(req.body).then((result)=>{
        let count = result.rowCount;
        let status, mensaje;
        if(count > 0){
        status = 200;
        mensaje = "Usuario Registrado.";
        }else{
      status = 500;
      mensaje = 'Error al registrar Usuario.'
      }
      res.json({status, mensaje})
      }).catch(err => {
    console.log(err);
    res.status(500).json({status: 500, mensaje: 'Error al Registrar.'});
    }) 
})


<p>
  I saw a werewolf with a Chinese menu in his hand.
  Walking through the <ion-text color="danger"><sub>streets</sub></ion-text> of Soho in the rain.
  He <ion-text color="primary"><i>was</i></ion-text> looking for a place called Lee Ho Fook's.
  Gonna get a <ion-text color="secondary"><a>big dish of beef chow mein.</a></ion-text>
  <ion-text color="danger"><ion-icon name="cut"></ion-icon></ion-text>
</p>






<ion-grid>
 <ion-row>
    <ion-col class="ion-align-self-start">

    </ion-col>
    <ion-col class="ion-align-self-center">

    </ion-col>

    <ion-col class="ion-align-self-end">
    <ion-button [routerLink]="['/registro']" size="small"  color="light">  
      <ion-icon slot="start" name="star"></ion-icon>Registro</ion-button>
    </ion-col>

  </ion-row>

  </ion-grid>









//DEL SERVIDOR 

    const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }

          const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }