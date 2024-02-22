import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import Sweet from '../interfaces/sweet.interface';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SweetsService {

  constructor(private firestore: Firestore) { }

  addSweet(sweet: Sweet){
    const sweetRef = collection(this.firestore, 'sweets');
    return addDoc(sweetRef, sweet);
  }

  getSweets(): Observable<Sweet[]>{
    const sweetRef = collection(this.firestore, 'sweets');
    return collectionData(sweetRef,{idField:'id'}) as Observable<Sweet[]>;
  }

  deleteSweet(sweet: Sweet){
    const sweetRef = doc(this.firestore, `sweets/${sweet.id}`);
    return deleteDoc(sweetRef);
  }
}
