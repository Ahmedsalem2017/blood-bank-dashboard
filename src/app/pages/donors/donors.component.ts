import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  users: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.users = db.list('/Feedback').valueChanges();
  }

  ngOnInit() {
  }

}
