import { Injectable } from '@angular/core';

import { RecetarioComponent } from '../components/recetario/recetario.component';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Place from '../interfaces/place.interface';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecetarioService  {
  constructor(private firestore: Firestore) { }

  getRecetas(): Observable<Place[]>{
      const ReferenciaReceta = collection(this.firestore, 'places');
      return collectionData(ReferenciaReceta, {idField:'id'}) as Observable<Place[]>
  }
}
