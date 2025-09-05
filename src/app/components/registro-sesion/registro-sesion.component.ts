import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { UsersService } from 'src/app/services/users.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent{

  alerta:boolean = false;
  msg: any = '';
  formRegister: FormGroup;

  constructor(private usersService: UsersService){
    this.formRegister = new FormGroup({
      correo: new FormControl(),
      password: new FormControl(),
      usuario: new FormControl()
    });
  }

  onSubmit(){
    //comparar la contraseña
  if (this.formRegister.value.correo == null || this.formRegister.value.usuario == null || this.formRegister.value.password == null) {
    this.alerta = true;
    this.msg = "Por favor rellena todos los campos";
  } else {
    this.usersService.register(this.formRegister.value)
    .then(response=>{
      alert('GRACIAS POR REGISTRARTE!! AHORA PUEDES INICIAR SESION')
    })
    .catch(error=>{
      this.alerta = true;
      this.msg = "Por favor revisa los datos ingresados"
    })
  }
  }

}
