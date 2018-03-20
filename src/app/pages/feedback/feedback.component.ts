import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  users: Observable<any[]>;

  constructor(db: AngularFireDatabase) { 
    this.users = db.list('/Feedback').valueChanges();
  }

  ngOnInit() {
  }

}
