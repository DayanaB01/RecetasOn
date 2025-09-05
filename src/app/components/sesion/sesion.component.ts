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

  alerta: boolean= false;
  msg: any = "";
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
    .catch(error=>{
      this.alerta = true;
      this.msg = 'Ups!!, hay un error en tus datos,por favor vuelve a intentarlo';
    })
  }

}
