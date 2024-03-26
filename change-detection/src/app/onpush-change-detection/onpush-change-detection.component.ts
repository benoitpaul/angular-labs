import { Component } from '@angular/core';
import { RootComponent } from './components/root/root.component';

@Component({
  selector: 'app-onpush-change-detection',
  standalone: true,
  imports: [RootComponent],
  template: `
    <div>
      <h2>OnPush Change Detection</h2>
      <p>This is the OnPush change detection mechanism</p>
      <p>
        The Root and Grand-Children components have Default change detection,
        whereas the 2 Child components have OnPush change detection.
      </p>
      <div>
        Points of interests:
        <ol>
          <li>
            Clicking on the Root button, triggers a change detection on the Root
            AND Child components, but the Child components are not refreshed
          </li>
          <li>
            Clicking on a Child button, triggers a change detection on the Root
            AND this particular Child component (and its Grand Child components)
            branch, but not the other Child component
          </li>
        </ol>
      </div>
      <app-onpush-change-detection-root />
    </div>
  `,
  styles: ``,
})
export class OnPushChangeDetectionComponent {}
