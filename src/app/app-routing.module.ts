import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroSesionComponent } from './components/registro-sesion/registro-sesion.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroSesionComponent},
  {path: 'perfil', component: PerfilComponent, ...canActivate(()=>redirectUnauthorizedTo(['inicio']))}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
