import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService, StorageService } from '../../services';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private storageService: StorageService,
    private util: UtilService,
    private navCtrl: NavController, 
  ) { }

  async ngOnInit() {}

  login() {
    // Enabling Side Menu
    this.util.setMenuState(true);
    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }

}
