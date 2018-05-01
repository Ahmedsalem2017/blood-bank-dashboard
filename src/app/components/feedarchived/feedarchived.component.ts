import { Component, OnInit, OnDestroy } from '@angular/core';
import { base64Decode } from '@firebase/util';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { DBService } from '../../services/db.service';

@Component({
  selector: 'app-feedarchived',
  templateUrl: './feedarchived.component.html',
  styleUrls: ['./feedarchived.component.css']
})

export class FeedarchivedComponent implements OnInit {
  loading = true;
  items: any;
  dataSubscription: Subscription;
  constructor(
    private db: DBService,
    private AFDB:AngularFireDatabase) {
  }

  ngOnInit() {
    this.dataSubscription = this.db.getData('archived').subscribe(items => {
      this.items = items;
      this.loading = false;
      
    });
  }

  deleteItem(key) {
    if (confirm('هل انت متأكد من الحذف؟')) {
      this.db.removeObject('archived/' + key).then(_ => {
          alert('تم الحذف بنجاح');
        });
    }
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
