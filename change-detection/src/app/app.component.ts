import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <nav>
      <h2>Test cases</h2>
      <ul>
        <li>
          <a routerLink="/default-change-detection">Default Change Detection</a>
        </li>
        <li>
          <a routerLink="/onpush-change-detection">OnPush Change Detection</a>
        </li>
      </ul>
    </nav>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'change-detection';
}
