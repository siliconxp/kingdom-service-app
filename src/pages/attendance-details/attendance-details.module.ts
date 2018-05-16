import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendanceDetailsPage } from './attendance-details';

@NgModule({
  declarations: [
    AttendanceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendanceDetailsPage),
  ],
})
export class AttendanceDetailsPageModule {}
