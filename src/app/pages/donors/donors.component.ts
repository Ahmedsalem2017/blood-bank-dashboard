import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  users: Observable<any[]>;
  itemRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.users = db.list('/Donors').valueChanges();
    this.itemRef = db.list('/Donors');
  }

  ngOnInit() {
  }

  // deleteItem(key: string) {    
  //   this.itemRef.remove(key); 
  // }

}
