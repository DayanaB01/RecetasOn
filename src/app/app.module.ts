import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth} from '@angular/fire/auth'
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewFormComponent } from './components/new-form/new-form.component';
import { ListComponent } from './components/list/list.component';
import { NewSweetComponent } from './components/new-sweet/new-sweet.component';
import { ListSweetComponent } from './components/list-sweet/list-sweet.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroSesionComponent } from './components/registro-sesion/registro-sesion.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BannerNavComponent } from './components/banner-nav/banner-nav.component';
import { RecetarioComponent } from './components/recetario/recetario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalRecetarioComponent } from './components/modal-recetario/modal-recetario.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { EditsRecipeComponent } from './components/edits-recipe/edits-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    ListComponent,
    NewSweetComponent,
    ListSweetComponent,
    FooterComponent,
    RegistroSesionComponent,
    InicioComponent,
    SesionComponent,
    PerfilComponent,
    BannerNavComponent,
    RecetarioComponent,
    ModalRecetarioComponent,
    EditsRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=> getAuth()),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
