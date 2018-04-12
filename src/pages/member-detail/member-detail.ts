import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { DataServiceProvider } from '../../providers/data-service';

import { ModalController } from 'ionic-angular';
import { MemberReportPage } from '../member-report/member-report';

/**
 * Generated class for the MemberDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-detail',
  templateUrl: 'member-detail.html',
})
export class MemberDetailPage {

  @Input() member = null;
  edit: boolean = null;
  $key: string;

  memberForm: FormGroup;
  submitAttempt: boolean = false;

  groups: any
  reports: any
  group: FormControl



  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public db: DataServiceProvider,public modalCtrl: ModalController) {
    this.edit = false;
    //this.member=navParams.get("member");

    this.$key = navParams.get("$key")

    //this.groups = 
    this.db.groups.do(val => console.log("group val", val))

    console.log(navParams)

    //this.group= new FormControl({ value: navParams.get("group"), disabled: true })
    //this.group.setValue(navParams.get("group"))

    this.memberForm = fb.group({
      fname: [navParams.get("fname"), Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lname: [navParams.get("lname"), Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      gender: navParams.get("gender"),
      group: navParams.get("group"),

    });

    //this.memberForm.get('group').setValue(2);

    this.db.groups.subscribe(value => {
      this.groups = value;
    })

    this.db.getMemberReports(this.$key).subscribe(value=>this.reports=value)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberDetailPage');

  }

  onClicked(toggle) {
    if (this.edit == true) {
    }
    this.edit = toggle;
  }

  beginEdit() {
    this.edit = true;
    //(this.memberForm.get("group") as FormControl ).setDisabledState(this.edit)

  }

  cancelEdit() {
    this.edit = false
    this.memberForm.setValue(
      {
        fname: this.navParams.get('fname'),
        lname: this.navParams.get('lname'),
        gender: this.navParams.get('gender'),
        group: this.navParams.get('group'),
      });
  }

  onFormSubmit() {
    if (this.edit == true) {
      this.submitAttempt = true;

      if (this.memberForm.valid) {

        this.db.updateMember(this.$key, this.memberForm.value)
        console.log("success!")
       // console.log(this.memberForm.value)
        this.edit = false
        this.submitAttempt = false
        this.navCtrl.pop();
      }
      else {//not valid


      }
    } else {
      this.edit = true;
    }
  }

  viewReport(report:any)
  {

    let reportData =
    {
      month:this.reports.month,
      Plcmts:(this.reports.Plcmts>0?this.reports.Plcmts:''),
      Videos:(this.reports.Videos>0?this.reports.Videos:''),
      Hours:(this.reports.Hours>0?this.reports.Hours:''),
      RVs:(this.reports.RVs>0?this.reports.RVs:''),
      BiSt:(this.reports.BiSt>0?this.reports.BiSt:''),
      


    }

    let modal = this.modalCtrl.create(MemberReportPage,{memberKey:this.$key,report:report});

    modal.onWillDismiss(data => {
      // Update your props here
      console.log('MODAL DATA', data);
  });
    modal.present();

  }


  

}
