import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

/**
 * Generated class for the AttendanceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance-details',
  templateUrl: 'attendance-details.html',
})
export class AttendanceDetailsPage {

  attendanceForm: FormGroup;
  exampleForm: FormGroup;

  items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.attendanceForm = this.fb.group({
      customerName: '',
      email: '',
      items: this.fb.array([this.createItem()])
    });

    // expan our form, create form array this._fb.array
    this.exampleForm = this.fb.group({
      month: ['', [Validators.required,
      Validators.maxLength(25)]],      
      attendances: this.fb.array([
        this.getUnit()
      ])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    var items = this.attendanceForm.get('items') as FormArray;
    items.push(this.createItem());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendanceDetailsPage');


  }



  // now we create some service methods for create, add and remove 
  // row inside form
  // create form row.
  private getUnit() {
    const numberPatern = '^[0-9.,]+$';
    return this.fb.group({
      //weekName: ['', Validators.required],
      midweek: ['', [Validators.pattern(numberPatern)]],
      weekend: ['', [Validators.pattern(numberPatern)]],      
    });
  }

  // add new row
  private addUnit() {
    const control = <FormArray>this.exampleForm.controls['attendances'];
    control.push(this.getUnit());
  }

  // remove row
  private removeUnit(i: number) {
    const control = <FormArray>this.exampleForm.controls['attendances'];
    control.removeAt(i);
  }



}
