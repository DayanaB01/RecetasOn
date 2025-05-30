import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import Place from '../interfaces/place.interface';
import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Place){
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<Place[]>{
    const placeRef = collection(this.firestore, 'places');
    return collectionData(placeRef, {idField: 'id'}) as Observable<Place[]>;
  }

  deletePlace(place: Place){
    const placeDocRef = doc(this.firestore, `places/${place.id}`);
    console.log("Informacion de eliminar: ", placeDocRef)
    return deleteDoc(placeDocRef);
  } 

  getEditPlace(recipe: string, receta_act: any){
    const placeDocRef = doc(this.firestore, `places/${recipe}`);
    return updateDoc(placeDocRef, receta_act); 
  }

}
