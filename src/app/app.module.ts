import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MembersPage } from '../pages/members/members';
import {MemberDetailPage} from '../pages/member-detail/member-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { SearchPipe } from '../pipes/search/search';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { firebaseConfig } from '../environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataServiceProvider,MemberData } from '../providers/data-service';
 

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    ListPage,
    MembersPage,
    MemberDetailPage,
    SearchPipe
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
    MemberDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,MemberData
  ]
})
export class AppModule {}
