import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, pipe } from 'rxjs'
// import { map } from 'rxjs/operators';
import { Color } from '../models/Color'


@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colorsColletction: AngularFirestoreCollection<Color>;
  colors: Observable<Color[]>;

  constructor(public afs: AngularFirestore) {
    this.colors = this.afs.collection('colors').valueChanges();
  }

  getColors() {
    return this.colors;
  }
}


