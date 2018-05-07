import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams,ModalController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



import { DataServiceProvider } from '../../providers/data-service';

import {MemberDetailPage} from '../member-detail/member-detail';
import { MemberReportPage } from '../member-report/member-report';


import 'rxjs/add/operator/debounceTime';
import { FormGroup, FormControl } from '@angular/forms';


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

  public filterInput = new FormControl();
  public filterText: string;



  constructor(public app: App, 
    public navCtrl: NavController, 
    public modalCtrl:ModalController,
    public navParams: NavParams,
    public db: DataServiceProvider) 
     {

      this.data={};
      this.data.groups=[];
     // this.data.membersByGroup=[];
      //this.membersByGroup=[]



      this.filterInput
      .valueChanges
      .debounceTime(1000)
      .subscribe(term => {
        this.filterText = term;
        console.log(term);
      });
      
      


   

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

  editReport(report:any)
  {

    let modal = this.modalCtrl.create(MemberReportPage,{report:report});
    modal.present();

  }

 

 


}
