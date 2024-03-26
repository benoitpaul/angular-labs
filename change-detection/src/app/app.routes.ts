import { Routes } from '@angular/router';
import { DefaultChangeDetectionComponent } from './default-change-detection/default-change-detection.component';
import { OnPushChangeDetectionComponent } from './onpush-change-detection/onpush-change-detection.component';

export const routes: Routes = [
  {
    path: 'default-change-detection',
    component: DefaultChangeDetectionComponent,
  },
  {
    path: 'onpush-change-detection',
    component: OnPushChangeDetectionComponent,
  },
];
