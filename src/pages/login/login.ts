import {Component} from '@angular/core';
import {IonicPage, NavController, Loading, AlertController, LoadingController} from 'ionic-angular';
import * as firebase from 'firebase/app';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthProvider} from '../../providers/auth/auth';
import {EmailValidator} from '../../validators/email';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  fireauth = firebase.auth();

  loginForm:FormGroup;
  loading:Loading;

  constructor(public navCtrl:NavController, public authData:AuthProvider,
              public formBuilder:FormBuilder, public alertCtrl:AlertController,
              public loadingCtrl:LoadingController) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
        EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
    });
  }

  loginUser() {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(authData => {
          this.navCtrl.setRoot(TabsPage);
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

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  goToResetPassword() {
    this.navCtrl.push('ResetPasswordPage');
  }

  createAccount() {
    this.navCtrl.push('SignupPage');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
