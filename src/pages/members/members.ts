import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  private membersCollection: AngularFirestoreCollection<any>;
  members: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private readonly afs: AngularFirestore) {
    this.membersCollection = afs.collection('members',ref => ref.orderBy('lname').orderBy('fname'));
    this.members = this.membersCollection.valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
  }

}
