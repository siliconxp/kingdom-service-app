import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



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

  Plcmts = new FormControl('')
  Videos = new FormControl('')
  Hours = new FormControl('', Validators.required)
  RVs = new FormControl('')
  BiSt = new FormControl('')
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




  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public viewCtrl: ViewController) {
    this.report = navParams.get('report');
    this.memberKey = navParams.get('memberKey');




    this.Hours.valueChanges.subscribe(
      h => {
        if (h > 0)
          this.isValid = true
        else
          this.isValid = false
      }
    )



  }

  resetForm() {

    this.reportForm.patchValue(this.report)

  }

  ionViewDidLoad() {
    this.resetForm()
  }

  saveForm() {


    this.viewCtrl.dismiss(this.report);

  }

  closeForm() {
    this.resetForm()
    this.isCancelled = true;
    this.viewCtrl.dismiss();
  }

  ionViewCanLeave(): boolean {
    // here we can either return true or false
    // depending on if we want to leave this view
    if (this.isValid || this.isCancelled) {
      return true;
    } else {
      return false;
    }
  }

}
