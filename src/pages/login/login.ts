import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthProvider } from '../../providers/auth/auth';

import { IonicPage, AlertController, LoadingController, NavController, NavParams, Loading } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

import { TabsPage } from '../tabs/tabs';

import { NgForm } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { EmailValidator } from '../../validators/validators';


//import { UserOptions } from '../../interfaces/user-options';


//https://f3gtq.app.goo.gl/Zi7X 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginData = { username: '', password: '' };
  loginError: any;

  submitted = false;

  public loginForm: FormGroup;
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public afAuth: AngularFireAuth,
    public authProvider: AuthProvider) {


    this.loginForm = fb.group({
      email: ['',
        Validators.compose([Validators.required, EmailValidator])],
      password: ['',
        Validators.compose([Validators.minLength(6), Validators.required])]
    });
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

      this.authProvider.loginUser(this.loginData.username, this.loginData.password)
        .then(
          () => this.navCtrl.setRoot(TabsPage),
          error => this.loginError = error.message
        )

        .then(value => {
          console.log('Nice, it worked!###');
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });

      this.loginData = { username: '', password: '' };

      // this.navCtrl.push(TabsPage);

    }

  }



  onSignup() {

    this.navCtrl.push(SignupPage);

  }


  goToSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword(): void {
    this.navCtrl.push('ResetPasswordPage');
  }

  loginWithGoogle() {
    this.authProvider.googleLogin()
  }
  logout() {
    this.authProvider.logout()
  }

  loginUser(): void {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email,
        this.loginForm.value.password)
        .then(authData => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(TabsPage);
          });
        }, error => {
          this.loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

}


















