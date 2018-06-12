import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data-service';


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

  memberReports:any

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:DataServiceProvider) {

    this.db.reports.subscribe(
      r=>{
        this.memberReports=this.db.clone(r)
      }
    );


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

}
