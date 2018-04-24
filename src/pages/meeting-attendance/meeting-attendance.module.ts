import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingAttendancePage } from './meeting-attendance';

@NgModule({
  declarations: [
    MeetingAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingAttendancePage),
  ],
})
export class MeetingAttendancePageModule {}
