import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidateNoZero } from '../../validators/validators'

import { DataServiceProvider } from '../../providers/data-service';

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
  memberKey: any
  isCancelled: boolean = false;
  isValid: boolean = false;

  Plcmts = new FormControl('',Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'))
  Videos = new FormControl('',Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'))
  Hours = new FormControl('', [Validators.required, Validators.pattern('^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$')])
  RVs = new FormControl('',Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'))
  BiSt = new FormControl('',Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'))
  remarks = new FormControl('')
  pio = new FormControl('')

  reportForm: FormGroup = this.fb.group({
    Plcmts: this.Plcmts,
    Videos: this.Videos,
    Hours: this.Hours,
    RVs: this.RVs,
    BiSt: this.BiSt,
    remarks: this.remarks,
    pio: this.pio
  });




  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public viewCtrl: ViewController,public db: DataServiceProvider) {
    this.report = navParams.get('report');
    this.memberKey = navParams.get('memberKey');


  }

  resetForm() {

    this.reportForm.patchValue(this.report)

  }

  ionViewDidLoad() {
    this.resetForm()
  }

  saveForm() {

   /*  this.db.saveReport(this.memberKey,this.report.id,this.reportForm.value).then(
      m=>console.log("Saved",this.reportForm.value)
    ).catch(
      e=>console.log("Failed",this.reportForm.value)
    ) */


    this.viewCtrl.dismiss(this.reportForm.value);

  }

  closeForm() {
    this.resetForm()
    this.isCancelled = true;
    this.viewCtrl.dismiss();
  }

  ionViewCanLeave(): boolean {
    // here we can either return true or false
    // depending on if we want to leave this view
    if (this.reportForm.valid || this.isCancelled) {
      return true;
    } else {
      return false;
    }
  }



}
