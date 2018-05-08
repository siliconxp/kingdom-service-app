import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MembersPage } from '../pages/members/members';
import { MemberDetailPage } from '../pages/member-detail/member-detail';
import { MemberReportPage } from '../pages/member-report/member-report';
import { MemberReportsPage } from '../pages/member-reports/member-reports';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MeetingAttendancePage } from '../pages/meeting-attendance/meeting-attendance';

import { SearchPipe } from '../pipes/search/search';
import { NozeroPipe } from '../pipes/nozero/nozero';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { firebaseConfig } from '../environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataServiceProvider, MemberData } from '../providers/data-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    ListPage,
    MembersPage,
    MemberDetailPage,
    MemberReportPage,
    MemberReportsPage,
    MeetingAttendancePage,
    SearchPipe, NozeroPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    ListPage,
    MembersPage,
    MemberReportPage,
    MemberReportsPage,    
    MemberDetailPage,
    MeetingAttendancePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataServiceProvider, MemberData
  ]
})
export class AppModule { }
