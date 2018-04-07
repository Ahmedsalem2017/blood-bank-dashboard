import { ValuesService } from './../../common/values.service';

import { DBService } from './../../services/db.service';
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
  loading = true;
  items: any;
  dataSubscription: Subscription;

  constructor(
    private db: DBService,
    public values: ValuesService) {
  }

  ngOnInit() {
    this.dataSubscription = this.db.getData('Donors').subscribe(items => {
      this.items = items;
      this.loading = false;
    });

  }

  deleteItem(key) {
    if (confirm('هل انت متأكد من الحذف؟')) {
      this.db.removeObject('Donors/' + key).then(_ => {
        alert('تم الحذف بنجاح');
      });
    }
  }

  fillter(bloodType: HTMLInputElement) {
    if (bloodType.value === 'الكل') {
      return this.ngOnInit();
    }
    this.loading = true;
    this.db.getDataByQuery('Donors', ref => {
      return ref.orderByChild('bloodtype')
                .equalTo(bloodType.value);
    }).subscribe(items => {
      this.items = items;
      this.loading = false;
    });
  }
  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
