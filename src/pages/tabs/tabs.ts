import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ReportsPage } from '../reports/reports';
import { ListPage } from '../list/list';
import { MembersPage } from '../members/members';
import { MeetingAttendancePage } from '../meeting-attendance/meeting-attendance';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MembersPage;
  tab3Root = ReportsPage;
  tab4Root = MeetingAttendancePage;
 

  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
