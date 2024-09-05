import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private auth: Auth) { }

  register({ correo, password }: any){
      return createUserWithEmailAndPassword(this.auth, correo, password);
  }

  login({correo, password}: any){
      return signInWithEmailAndPassword(this.auth, correo, password);
  }

  logOut(){
    return signOut(this.auth)
  }


  //DONDE PONER EL BOTÓN PARA SALIR DEL LOGIN??
  //HACER UN COMPONENTE DE PERFIL Y AITORIXAR LA DE CREAR Y VER RECETAS
}
