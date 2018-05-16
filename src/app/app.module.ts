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
import { SignupPage } from '../pages/signup/signup';

import { MeetingAttendancePage } from '../pages/meeting-attendance/meeting-attendance';
import { AttendanceDetailsPage } from '../pages/attendance-details/attendance-details';


import { SearchPipe } from '../pipes/search/search';
import { NozeroPipe } from '../pipes/nozero/nozero';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { firebaseConfig } from '../environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { DataServiceProvider, MemberData } from '../providers/data-service';
import { AuthProvider } from '../providers/auth/auth';


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
    AttendanceDetailsPage,
    SignupPage,
    SearchPipe, NozeroPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
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
    MeetingAttendancePage,
    AttendanceDetailsPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataServiceProvider, MemberData,
    AuthProvider,AngularFireAuth
  ]
})
export class AppModule { }
