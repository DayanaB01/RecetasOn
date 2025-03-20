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
    this.userservice.login(this.inicioSesion.value)
    .then(res=>{    
      this.routers.navigate(['/verlista'])      
    })
    .catch(error=>console.log(error))
  }

}
