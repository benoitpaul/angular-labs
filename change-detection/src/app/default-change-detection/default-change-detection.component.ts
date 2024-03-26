import { Component } from '@angular/core';
import { RootComponent } from './components/root/root.component';

@Component({
  selector: 'app-default-change-detection',
  standalone: true,
  imports: [RootComponent],
  template: `<div>
    <h2>Default Change Detection</h2>
    <p>This is the default change detection mechanism</p>
    <p>
      Clicking on any button, or entering a value in the text field of the root
      component triggers a change detection on all components
    </p>
    <app-default-change-detection-root />
  </div> `,
  styles: ``,
})
export class DefaultChangeDetectionComponent {}
