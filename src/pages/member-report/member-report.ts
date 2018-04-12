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
  memberKey:any
  isCancelled:boolean = false;
  isValid:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.report=navParams.get('report');
    this.memberKey=navParams.get('memberKey');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberReportPage');
  }

  saveForm() {

   
    this.viewCtrl.dismiss(this.report);

  }

  closeForm() {
    this.isCancelled=true;
    this.viewCtrl.dismiss();
  }

  ionViewCanLeave(): boolean{
    // here we can either return true or false
    // depending on if we want to leave this view
    if(this.isValid || this.isCancelled){
       return true;
     } else {
       return false;
     }
   }

}
