import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userId: any ;
  database: any;
  data: any;
  name: string;
  userDetails: any;
  items: FirebaseListObservable<any[]>;


  pet: string = "profile";

  constructor(public navCtrl: NavController,public authData: AuthProvider, public navParams: NavParams, public af: AngularFireDatabase) {

    this.userId = firebase.auth().currentUser.uid;
    this.items = af.list('user');
    console.log(this.items);


    this.data = firebase.database().ref('users/' + this.userId).on('value',function(snapshot){
        var userDetails = snapshot.val();
        console.log(userDetails);
      });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){
    this.navCtrl.setRoot(LoginPage,{ tabsHideOnSubPages:"false"});
    return this.authData.logoutUser();

  }

/*  getUserProfile(): Promise<any> {
    return new Promise( (resolve, reject) => {
      firebase.database().ref('/users')
        .child(firebase.auth().currentUser.uid)
        .on('value', data => {
          resolve(data.val());
          this.name = data.val().username;
        });
    });
  }*/

  write (){
    let userId= this.userId;
      firebase.database().ref('users/' + userId).set({
        username: "hello"
      });
  }
}
