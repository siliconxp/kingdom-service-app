import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


/**
 * Generated class for the MemberReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-report',
  templateUrl: 'member-report.html',
})
export class MemberReportPage {

  report: any

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.report=navParams.get('report');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberReportPage');
  }

  saveForm() {

    console.log(this.report)
    this.viewCtrl.dismiss(this.report);

  }

  closeForm() {
    this.viewCtrl.dismiss();
  }

}
