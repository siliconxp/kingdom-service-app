import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import {MemberDetailPage} from '../member-detail/member-detail';

import { DataServiceProvider } from '../../providers/data-service';


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
  groups:any;
  groupMembers:any



  constructor(public app: App, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: DataServiceProvider) 
     {

      this.data={};
      this.data.groups=[];
     // this.data.membersByGroup=[];
      //this.membersByGroup=[]
      
      


   

  }

  ionViewDidLoad() {
    this.app.setTitle('Members');

    this.updateData();
   
  }

  isFemale(g:any)
  {
    return (g==="Female");
  }

  isMale(g:any)
  {
    return (g==="Male");
  }

  goToMemberDetail(item) {

   console.log(item)
   
    this.navCtrl.push(MemberDetailPage, 
      {
        $key:item.$key,
        fname:item.fname,
        lname:item.lname,
        gender:item.gender,
        group:item.group
      }
    );
  }

  updateData()
  {
   this.db.getData().subscribe((data: any) => {    
    this.data = data;
    this.groupMembers=this.data.groupMembers
  });

  this.db.groups.subscribe(value =>{
    this.groups=value;
  } )

  }

 

 


}
