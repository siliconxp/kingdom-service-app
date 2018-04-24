import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';

/**
 * Generated class for the MeetingAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting-attendance',
  templateUrl: 'meeting-attendance.html',
})
export class MeetingAttendancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public db: DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingAttendancePage');
  }

  editAttendance(a:any){

    let prompt = this.alertCtrl.create({
      title: 'Report',
      message: "Enter a name for this new song you're so keen on adding",
      inputs: [
        {
          name: 'midweek',
          placeholder: 'Midweek',
          type:'number'
        },
        {
          name: 'weekend',
          placeholder: 'Weekend',
          type:'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            //const newSongRef = this.songs.push({});
   
            //newSongRef.set({
           //   id: newSongRef.key
          //    title: data.title
           // });
          }
        }
      ]
    });
    prompt.present();

  }

}
