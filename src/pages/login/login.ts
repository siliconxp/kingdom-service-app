import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

import { TabsPage } from '../tabs/tabs';

import { NgForm } from '@angular/forms';


//import { UserOptions } from '../../interfaces/user-options';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginData = { username: '', password: '' };

  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    this.navCtrl.setRoot(TabsPage);
  }

  
  onLogin(form: NgForm) {

    this.submitted = true;



    if (form.valid) {

      //this.userData.login(this.login.username);

      this.navCtrl.push(TabsPage);

    }

  }



  onSignup() {

    this.navCtrl.push(SignupPage);

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}


















