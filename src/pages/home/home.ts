import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider,MemberData } from '../../providers/data-service';
import { combineLatest } from 'rxjs/operator/combineLatest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab:any

  members:any
  filter:any

  constructor(public navCtrl: NavController) {

    
  }
  ionViewDidLoad() {
   // this.members =  this.md.loadMembers()
  }

}
