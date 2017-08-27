import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  keluar(){

	this.app.getRootNav().setRoot(LoginPage);
		//this.navCtrl.push(LoginPage);

	}

}
