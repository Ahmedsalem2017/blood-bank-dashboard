import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  users: Observable<any[]>;
  
  constructor(db: AngularFireDatabase) {
    this.users = db.list('/required').valueChanges();
  }

  ngOnInit() {
  }

}
