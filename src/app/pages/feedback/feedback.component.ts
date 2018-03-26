import { Component, OnInit, OnDestroy } from '@angular/core';
import { base64Decode } from '@firebase/util';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit , OnDestroy {

  items: any;
  dataSubscription: Subscription;

  constructor(private afDB: AngularFireDatabase) {
  }

  ngOnInit() {
    this.dataSubscription = this.afDB.list('Feedback', ref => {
      return ref.orderByChild('decs');
    }).snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    }).subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(key) {
    if (confirm('هل انت متأكد من الحذف؟')) {
        this.afDB.object('Feedback/' + key).remove().then(_ => {
          alert('تم الحذف بنجاح');
        });
    }
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
