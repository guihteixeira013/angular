import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular';

  // testando *ngIF
  isPremium: boolean = true;

  // testando *ngFOR
  valores = [
    'gui',
    'pam',
    'angel',
  ]
}
