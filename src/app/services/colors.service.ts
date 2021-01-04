import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, pipe } from 'rxjs'
import { map } from 'rxjs/operators';
import { Color } from '../models/Color'


@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colorsColletction: AngularFirestoreCollection<Color>;
  colors: Observable<Color[]>;
  colorDoc: AngularFirestoreDocument;

  

  constructor(public afs: AngularFirestore) {

    this.colorsColletction = this.afs.collection('colors');



    this.colors = this.colorsColletction.snapshotChanges().pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Color;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  getColors() {
    return this.colors;
  }

  updateHexColor(color : Color) {
    this.colorDoc = this.afs.doc(`colors/${color.id}`);
    this.colorDoc.update(color)
  }
}


