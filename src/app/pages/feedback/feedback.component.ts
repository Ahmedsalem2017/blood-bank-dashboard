import { Component, OnInit, OnDestroy } from '@angular/core';
import { base64Decode } from '@firebase/util';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { DBService } from '../../services/db.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit , OnDestroy {
  loading = true;
  items: any;
  dataSubscription: Subscription;
  subscription;
  constructor(
    private db: DBService,
    private AFDB:AngularFireDatabase) {
  }

  ngOnInit() {
    this.dataSubscription = this.db.getData('Feedback').subscribe(items => {
      this.items = items;
      this.loading = false;

    });
  }

  deleteItem(key) {
    if (confirm('هل انت متأكد من الحذف؟')) {
        this.db.removeObject('Feedback/' + key).then(_ => {
          alert('تم الحذف بنجاح');
        });
    }
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
 
 feedarchive(items){
  if (confirm('هل انت متأكد من أرشفة هذا الموضوع؟')) {
this.AFDB.list('/archived').push({items}).then(_=>{
  alert('تم الأرشفة بنجاح');
});

}
  }

  deleteArchived(key) {
        this.db.removeObject('Feedback/' + key);
    }



}



