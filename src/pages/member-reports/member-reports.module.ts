import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberReportsPage } from './member-reports';

@NgModule({
  declarations: [
    MemberReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberReportsPage),
  ],
})
export class MemberReportsPageModule {}
