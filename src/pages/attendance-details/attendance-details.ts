import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { DataServiceProvider } from '../../providers/data-service';



@IonicPage()
@Component({
  selector: 'page-attendance-details',
  templateUrl: 'attendance-details.html',
})
export class AttendanceDetailsPage {


  attendanceForm: FormGroup;

  items: any = [];
  dateId: string

  numberPatern = '^[0-9.,]+$';

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public db: DataServiceProvider) {

    let dates = navParams.get('dates')
    this.dateId = navParams.get('id')



    // expan our form, create form array this._fb.array
    this.attendanceForm = this.fb.group({
      id: [this.dateId, [Validators.required,
      Validators.maxLength(25)]],
      attendances: this.fb.array(
        []
      )
    });

    this.setDates(dates)
  }
  setDates(dates: any[]) {
    const datesFGs = dates.map(
      d => {
        let m = d.midweek > 0 ? d.midweek : '';
        let w = d.weekend > 0 ? d.weekend : '';

        return this.fb.group({
          id: d.id,
          midweek: [m, [Validators.pattern(this.numberPatern)]],
          weekend: [w, [Validators.pattern(this.numberPatern)]],
        }, { updateOn: 'change' })
      }
    );
    const datesFormArray = this.fb.array(datesFGs);

    this.attendanceForm.setControl('attendances', datesFormArray);
  }

  saveForm() {
    let attendanceArray = this.attendanceForm.value.attendances.map(
      a => {
        let aa = this.db.clone(a);
        console.log(JSON.stringify(aa))
        return aa;
      }

      
    )

    for (let index = 0; index < attendanceArray.length; index++) {
      const aa = attendanceArray[index];
      this.db.saveAttendance(aa.id,aa)
      
    }
    

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendanceDetailsPage');
  }




  /* 
    // add new row
    private addUnit() {
      const control = <FormArray>this.attendanceForm.controls['attendances'];
      control.push(this.getUnit());
    }
  
    // remove row
    private removeUnit(i: number) {
      const control = <FormArray>this.attendanceForm.controls['attendances'];
      control.removeAt(i);
    } */



}
