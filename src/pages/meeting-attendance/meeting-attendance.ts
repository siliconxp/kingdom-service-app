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
      message: "Update Attendance Figures",
      inputs: [
        {
          name: 'midweek',
          placeholder: 'Midweek',
          type:'number',
          value:a.midweek
        },
        {
          name: 'weekend',
          placeholder: 'Weekend',
          type:'number',
          value:a.weekend
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('saving...',a,data);
            this.db.saveAttendance(a.id,data)
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
