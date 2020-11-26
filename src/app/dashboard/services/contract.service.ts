import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Contract } from '../model/contract.model';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  private dataCollection: AngularFirestoreCollection<Contract>;
  contractInfo: Observable<Contract[]>;
  path = 'contracts';

  constructor(private firestore: AngularFirestore) { }

  getData(): Observable<Contract[]> {
    this.dataCollection = this.firestore.collection<Contract>('contracts');

    return this.dataCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contract;
        // tslint:disable-next-line: variable-name
        const _id = a.payload.doc.id;
        return { _id, ...data };
      })));

  }
}
