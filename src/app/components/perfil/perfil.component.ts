import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import User from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})


export class PerfilComponent implements OnInit{

  	public email: any = "";
    public name: any = "";
  constructor(private usersService: UsersService, private router: Router, private auth: Auth) {}
  
  ngOnInit(){
    const user = this.auth.currentUser;
    this.email = user?.email;
    this.name = user?.displayName;
  }

  salir() {
    this.usersService
      .logOut()
      .then(() => {
        this.router.navigate(['/inicio']);
      })
      .catch((e) => console.log(e));
  }
}
