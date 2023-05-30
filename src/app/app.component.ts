import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Calculator', url: '/calculator', icon: 'calculator' },
    { title: 'Translator', url: '/translator', icon: 'language' },
    { title: 'Table', url: '/table', icon: 'grid' },
    { title: 'About', url: '/about', icon: 'person-circle' },
  ];
  constructor() {}
}
