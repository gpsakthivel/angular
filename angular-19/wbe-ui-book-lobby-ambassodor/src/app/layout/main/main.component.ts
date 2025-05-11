import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isExpanded:boolean = false;

  constructor(){
  }

  openSideNav(){
    this.isExpanded = !this.isExpanded
  }

  public routeLinks = [
    { link: 'dashboard', name: 'dashboard', icon: 'Dashboard' },
    // { link: 'search', name: 'search', icon: 'search' },
    // { link: 'av_timer', name: 'av_timer', icon: 'av_timer' },
    { link: 'settings', name: 'settings', icon: 'Settings' },
    { link: 'exit_to_app', name: 'exit_to_app', icon: 'Logout' }
  ];

  getRandomIcon(list:any){
    return `${list.icon}.svg`
  }

}
