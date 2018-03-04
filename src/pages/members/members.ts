import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import {MemberDetailPage} from '../member-detail/member-detail';

import { DataServiceProvider } from '../../providers/data-service/data-service';


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



  data: any;



  constructor(public app: App, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataSource: DataServiceProvider) 
     {

      this.data={};
      this.data.groups=[];
   

  }

  ionViewDidLoad() {
    this.app.setTitle('Members');

    this.updateData();
   
  }

  goToMemberDetail(item) {

   console.log(item)
   
    this.navCtrl.push(MemberDetailPage, 
      {
        $key:item.$key,
        fname:item.fname,
        lname:item.lname,
        gender:item.gender
      }
    );
  }

  updateData()
  {
   this.dataSource.getData().subscribe((data: any) => {    
    this.data = data;
  });

  }

 

 


}
