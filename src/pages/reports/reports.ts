import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data-service';

import { from } from 'rxjs/observable/from';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

import { ReportPage } from '../report/report';



/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {

  memberReports: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private db: DataServiceProvider) {

    this.db.reports.subscribe(
      r => {
        //this.memberReports = this.db.clone(r)

        /*    this.memberReports = r.reduce((groups, item) => {
             const val = item['memberId']
             groups[val] = groups[val] || []
             groups[val].push(item)
             return groups
   
           }, {}) */


        let group = []
        r.forEach(
          rr => {

            var i = group.findIndex((o => o.memberId === rr.memberId));
            if (i >= 0) {
              group[i].reports = group[i].reports || []
              group[i].reports.push(rr)
            } else {
              let g = { 'memberId': rr.memberId, 'fname': rr.fname, 'lname': rr.lname, reports: [] }
              g.reports.push(rr)
              group.push(g)
            }
          }
        )

        this.memberReports = this.db.clone(group)




      }
    );


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }


  editReport(report: any) {

    this.navCtrl.push('ReportPage', { report: report })

    /* let modal = this.modalCtrl.create('ReportPage',{report:report});

    modal.onDidDismiss(
      data=>{

        this.db.saveReport(report.memberId,report.period,data).then(
          ()=>console.log("saved")
        ).catch(
          e=>console.log("Failed")
        )
      }
    ) 


    modal.present();*/

  }

}
