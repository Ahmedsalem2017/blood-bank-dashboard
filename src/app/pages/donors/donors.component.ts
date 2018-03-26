import { Component, OnInit, OnDestroy } from '@angular/core';
import { base64Decode } from '@firebase/util';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit , OnDestroy {

  items: any;
  dataSubscription: Subscription;

  constructor(private afDB: AngularFireDatabase) {
  }

  ngOnInit() {
    this.dataSubscription = this.afDB.list('Donors', ref => {
      return ref.orderByChild('decs');
    }).snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    }).subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(key) {
    if (confirm('هل انت متأكد من الحذف؟')) {
        this.afDB.object('Donors/' + key).remove().then(_ => {
          alert('تم الحذف بنجاح');
        });
    }
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
