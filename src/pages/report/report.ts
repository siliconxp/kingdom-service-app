import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidateNoZero } from '../../validators/validators'

import { DataServiceProvider } from '../../providers/data-service';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  report: any
  memberKey: any
  isCancelled: boolean = false;
  isValid: boolean = false;

  Plcmts = new FormControl('', Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'))
  Videos = new FormControl('', Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'))
  Hours = new FormControl('', [Validators.required, Validators.pattern('^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$')])
  RVs = new FormControl('', Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'))
  BiSt = new FormControl('', Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'))
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public viewCtrl: ViewController, public loading: LoadingController, public db: DataServiceProvider, public toastCtrl: ToastController) {

    this.report = navParams.get('report');
  }
  resetForm() {
    this.reportForm.patchValue(this.report)
  }

  ionViewDidLoad() {
    this.resetForm()
  }

  saveForm() {

    let loader = this.loading.create({
      content: 'Updating...',
    });


    loader.present()


    this.db.saveReport(this.report.memberId, this.report.period, this.reportForm.value).then(
      () => {
        console.log("saved", this.reportForm.value)

        loader.dismiss()
        this.showToast(`Report Saved!`)
        this.navCtrl.pop()
      }

    ).catch(
      e => {

        this.showToast(e)

        console.log("Failed", this.reportForm.value)
      }
    )



  }

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: `Report Saved!`,
      duration: 2000
    });

    toast.present();
  }

}
