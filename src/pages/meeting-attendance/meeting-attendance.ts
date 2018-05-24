import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';

import { AttendanceDetailsPage } from '../attendance-details/attendance-details';

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

  periods: any=[];
  attendance: any=[];
  attendanceRaw: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public db: DataServiceProvider) {

    db.periods.subscribe(p => {

      console.log("periods:" + p.length);
      this.periods = db.clone(p);
      this.loadAttendance()
    })

    db.attendance.subscribe(a => {

      console.log("attendance:" + a.length);
      this.attendanceRaw = db.clone(a);
      this.loadAttendance()
    })

  }

  loadAttendance() {
    this.attendance = []

    this.periods.forEach(e => {

      var givenDate = e.id;
      var month = givenDate.substring(4, givenDate.length); // retrieves 04
      var year = givenDate.substring(0, 4);                 // retrieves 2017

      var d = new Date(e.id);
      var mondays = this.db.getMondays(d);

      var dates = mondays.map(m => {
        return {
          id: m.toISOString().substring(0, 10),
          weekstarting: m,
          midweek: 0,
          weekend: 0
        }
      })
      this.attendance = [...this.attendance, ...dates];

      this.attendanceRaw.forEach(a => {

        const index = this.attendance.findIndex(aa => aa.id == a.id)
        console.log(`index:${index} id:${a.id}`)
        if (index) {
          this.attendance[index] = a;
        }

      });

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingAttendancePage');
  }

  editMonthAttendance(a: any) {
    this.navCtrl.push(AttendanceDetailsPage)
  }

  editWeekend(a: any) {


    let prompt = this.alertCtrl.create({
      title: 'Weekend Meeting',
      message: "Update Attendance Figures",
      inputs: [

        {
          label: 'Weekend',
          name: 'weekend',
          placeholder: 'Weekend',
          type: 'number',
          value: a.weekend
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {

          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('saving...', a, data);
            //data.weekstarting = a.weekstarting;
           // data.id=a.id
            a.weekend=+data.weekend
            this.db.saveAttendance(a.id, a)
          }
        }
      ]
    });
    prompt.present();

  }

  editMidweek(a: any) {


    let prompt = this.alertCtrl.create({
      title: 'Weekend Meeting',
      message: "Update Attendance Figures",
      inputs: [
        {
          label: 'Midweek',
          name: 'midweek',
          placeholder: 'Midweek',
          type: 'number',
          value: a.midweek
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {

          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('saving...', a, data);
            a.midweek=+data.midweek
            this.db.saveAttendance(a.id, a)
          }
        }
      ]
    });
    prompt.present();

  }

}
