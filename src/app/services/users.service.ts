import { Injectable } from '@angular/core';
import User from '../interfaces/user.interface';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { collectionData } from '@angular/fire/firestore';

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

  miperfil(){
   const user = this.auth.currentUser;
    
    if (user === null) {
      return null ;
    } else {
      return user;
    }
  }

  logOut(){
    return signOut(this.auth)
  }


  //DONDE PONER EL BOTÓN PARA SALIR DEL LOGIN??
  //HACER UN COMPONENTE DE PERFIL Y AITORIXAR LA DE CREAR Y VER RECETAS
}
