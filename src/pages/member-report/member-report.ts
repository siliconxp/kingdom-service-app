import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
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
  memberKey:any
  isCancelled:boolean = false;
  isValid:boolean=false;

  placements = new FormControl('')
  videos = new FormControl('')
  hours = new FormControl('',Validators.required)
  rvs = new FormControl('')
  BiSt = new FormControl('')
  remarks = new FormControl('')
  pio = new FormControl('')

  reportForm: FormGroup= this.fb.group({
    placements: this.placements,
    videos: this.videos,
    hours: this.hours,
    rvs: this.rvs,
    BiSt: this.BiSt,
    remarks: this.remarks,
    pio: this.pio    
  });

 
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder,public viewCtrl: ViewController) {
    this.report=navParams.get('report');
    this.memberKey=navParams.get('memberKey');


    this.hours.valueChanges.subscribe(
      h=>{
        if(h>0)        
        this.isValid = true
        else
        this.isValid=false
      }
    )

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberReportPage');
  }

  saveForm() {

   
    this.viewCtrl.dismiss(this.report);

  }

  closeForm() {
    this.isCancelled=true;
    this.viewCtrl.dismiss();
  }

  ionViewCanLeave(): boolean{
    // here we can either return true or false
    // depending on if we want to leave this view
    if(this.isValid || this.isCancelled){
       return true;
     } else {
       return false;
     }
   }

}
