import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})


export class PerfilComponent {
 

  constructor(private usersService: UsersService, private router: Router) {}

  salir() {
    this.usersService
      .logOut()
      .then(() => {
        this.router.navigate(['/inicio']);
      })
      .catch((e) => console.log(e));
  }

}
