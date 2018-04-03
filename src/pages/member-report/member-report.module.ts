import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberReportPage } from './member-report';

@NgModule({
  declarations: [
    MemberReportPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberReportPage),
  ],
})
export class MemberReportPageModule {}
