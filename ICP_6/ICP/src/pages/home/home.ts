// @ts-ignore
import { Component,viewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {createElementCssSelector} from "@angular/compiler";
// @ts-ignore

import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname: String;
  password: String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn() {
    if (this.uname == "sai" && this.password == "sai") {
      var alert = this.alertCtrl.create({
        title: "Login Successfull!",
        subTitle: "Welcome" + " " + this.uname,
        buttons: ['ok']

      });
      alert.present();
    }else{
      // @ts-ignore
      let alrt = this.alertCtrl.create({
        title:"Login Failed",
        subTitle: "Please Enter Valid Credentials",
        buttons:['ok']
      });
      alrt.present();
    }
  }
  register(){
    this.navCtrl.push(AboutPage);
  }
}
