import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';

import { ModalController } from 'ionic-angular';
import { MemberReportPage } from '../member-report/member-report';

/**
 * Generated class for the MemberReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-reports',
  templateUrl: 'member-reports.html',
})
export class MemberReportsPage {

  $key: string;
  fname: string;
  lname: string;
  reports:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: DataServiceProvider,public modalCtrl: ModalController) {
    this.$key = navParams.get("$key")
    this.fname = navParams.get("fname")
    this.lname = navParams.get("lname")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberReportsPage');
    this.db.getMemberReports(this.$key).subscribe(value=>this.reports=value)
  }

  editReport(report:any)
  {

    let modal = this.modalCtrl.create(MemberReportPage,{report:report});

    modal.onDidDismiss(
      data=>{

        this.db.saveMemberReport(this.$key,report.id,data).then(
          ()=>console.log("saved")
        ).catch(
          e=>console.log("Failed")
        )
      }
    )


    modal.present();

  }

  

}
