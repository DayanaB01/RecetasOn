import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewFormComponent } from './components/new-form/new-form.component';
import { ListComponent } from './components/list/list.component';
import { NewSweetComponent } from './components/new-sweet/new-sweet.component';
import { ListSweetComponent } from './components/list-sweet/list-sweet.component';


@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    ListComponent,
    NewSweetComponent,
    ListSweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
