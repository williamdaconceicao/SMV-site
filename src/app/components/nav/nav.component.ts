import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'navBar',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  public currentUrl: string = '';

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => this.currentUrl = event.url);
  }

  
}
