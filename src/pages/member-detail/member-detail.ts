import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.edit = false;
    this.member=navParams.get("member");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberDetailPage');
  }

  onClicked(toggle) {
    if (this.edit == true) {
    }
    this.edit = toggle;
  }
  onSubmit(formValue: any) {
    console.log(formValue);
  }


}
