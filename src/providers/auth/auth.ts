import { Injectable } from '@angular/core';
 import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

  signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
  }

}
