import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()
  buttons = ['MENU', 'NOTIFICATION', 'FILTER'];

  @Input()
  route = '';

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}

  navigateToPage(){
    this.navCtrl.navigateRoot(this.route, { animationDirection: 'back' });
  }

  get isShowMenu(): boolean{
    return !!this.buttons.find(item=> item === 'MENU');
  }

  get isShowNotification(): boolean{
    return !!this.buttons.find(item=> item === 'NOTIFICATION');
  }

  get isShowBack(): boolean{
    return !!this.buttons.find(item=> item === 'BACK');
  }

  get isShowFilter(): boolean{
    return !!this.buttons.find(item=> item === 'FILTER');
  }

  get isShowSearch(): boolean{
    return !!this.buttons.find(item=> item === 'SEARCH');
  }

}
