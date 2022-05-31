import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isMobile = true;

  constructor(private router: Router) {}

  onClick = (arg: 'next' | 'previous') => {
    const nextRoute = arg === 'next' ? 2 : 1;
    this.router.navigate([nextRoute]);
  };

  onChange = () => {
    this.isMobile = !this.isMobile;
  };
}
