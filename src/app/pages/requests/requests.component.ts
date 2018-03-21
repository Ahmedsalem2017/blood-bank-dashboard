import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireObject , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  users: Observable<any[]>;
  itemRef: AngularFireList<any>;
  
  constructor(db: AngularFireDatabase) {
    this.users = db.list('/required').valueChanges();
    this.itemRef = db.list('/required');
  }

  ngOnInit() {
  }

  // deleteItem(key: string) {    
  //   this.itemRef.remove(key); 
  // }

}
