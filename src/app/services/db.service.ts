import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class DBService {

  constructor(
    private afDB: AngularFireDatabase
  ) { }


  getData(field) {
    return this.afDB.list(field, ref => {
      return ref.orderByChild('decs');
    }).snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    });
  }

  removeObject(field) {
    return this.afDB.object(field).remove();
  }

}
