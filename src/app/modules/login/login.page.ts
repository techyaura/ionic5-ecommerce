import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UtilService, StorageService, AuthService } from '../../services';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGrp: FormGroup;

  constructor(
    private storageService: StorageService,
    private util: UtilService,
    private authService: AuthService,
    private navCtrl: NavController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.formGrp = this.fb.group({
      email: ['techyaura@gmail.com', [Validators.required]],
      password: ['techyaura', [Validators.required]]
    });
  }    

  login() {
    if(this.formGrp.valid){
      this.authService.login(this.formGrp.value)
        .subscribe(
          response=>{
            // Enabling Side Menu
            this.storageService.set('__token', response.token);
            this.storageService.set('__session', response.user);
            this.util.setMenuState(true);
            this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
          },
          (err=>{
            console.log(err);
          })
        )
    }
  }

}
