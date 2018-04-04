import { DBService } from './../../services/db.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { base64Decode } from '@firebase/util';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit  , OnDestroy{
  loading = true;
  items: any;
  dataSubscription: Subscription;

  constructor(
    private db: DBService) {
  }

  ngOnInit() {
    this.dataSubscription = this.db.getData('required').subscribe(items => {
      this.items = items;
      this.loading = false;
    });
  }

  deleteItem(key) {
    if (confirm('هل انت متأكد من الحذف؟')) {
      this.db.removeObject('required/' + key).then(_ => {
        alert('تم الحذف بنجاح');
      });
    }
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
