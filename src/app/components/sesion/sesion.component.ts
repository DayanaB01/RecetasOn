import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

  inicioSesion: FormGroup;

  constructor(private userservice: UsersService, private routers: Router){
    this.inicioSesion = new FormGroup({
      correo: new FormControl(),
      password: new FormControl()
    })
  }

  Iniciar(){
    //console.log(this.inicioSesion.value)
    this.userservice.login(this.inicioSesion.value)
    .then(res=>{
      //console.log(res)
      this.routers.navigate(['/perfil'])
      
    })
    .catch(error=>console.log(error))
  }

}
