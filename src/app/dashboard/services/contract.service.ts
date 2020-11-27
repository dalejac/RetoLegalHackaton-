import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Contract } from '../model/contract.model';

@Injectable({
  providedIn: 'root'
})

export class ContractService {

  private dataCollection: AngularFirestoreCollection<Contract>;
  path = 'contracts';

  constructor(private firestore: AngularFirestore) { }

  getAll(): Observable<Contract[]> {
    this.dataCollection = this.firestore.collection<Contract>('contracts');

    return this.dataCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contract;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }
    add(item: Contract): Promise<any> {
      return this.dataCollection.add(item);
    }

    update(id: string, item: Partial<Contract>): Promise<any> {
      return this.firestore.doc(`${this.path}/${id}`).update(item);
    }
  }

