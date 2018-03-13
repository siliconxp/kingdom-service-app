import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataServiceProvider } from '../../providers/data-service';

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

  groups:any




  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public db: DataServiceProvider) {
    this.edit = false;
    //this.member=navParams.get("member");

    this.$key = navParams.get("$key")

    //this.groups = 
    this.db.groups.do(val => console.log("group val",val))

    console.log(navParams)

    this.memberForm = fb.group({
      fname: [navParams.get("fname"), Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lname: [navParams.get("lname"), Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      gender: navParams.get("gender"),
      group: navParams.get("group")

    });

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

  }

  cancelEdit() {
    this.edit = false
    this.memberForm.setValue(
      {
        fname: this.navParams.get('fname'),
        lname: this.navParams.get('lname'),
        gender: this.navParams.get('gender'),
      });
  }

  onFormSubmit() {
    if (this.edit == true) {
      this.submitAttempt = true;

      if (this.memberForm.valid) {

        this.db.updateMember(this.$key, this.memberForm.value)
        console.log("success!")
        console.log(this.memberForm.value)
        this.edit = false
        this.submitAttempt = false
      }
      else {//not valid


      }
    } else {
      this.edit = true;
    }
  }

}
