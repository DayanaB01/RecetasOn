import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent{

  formRegister: FormGroup;

  constructor(private usersService: UsersService){
    this.formRegister = new FormGroup({
      correo: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
  // console.log(this.formRegister.value)
    this.usersService.register(this.formRegister.value)
    .then(response=>{
      //console.log(response)
      alert('GRACIAS POR REGISTRARTE!! AHORA PUEDES INICIAR SESION')
    })
    .catch(error=>console.log(error))
  }
}
