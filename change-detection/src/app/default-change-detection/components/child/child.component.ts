import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input } from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-default-change-detection-child',
  standalone: true,
  imports: [CommonModule, GrandChildComponent],
  template: `
    <div class="child">
      <div class="header">
        <span>Child Component</span>
        <button (click)="handleClick()">click me</button>
      </div>
      <div>
        <ul>
          <li>Text as value: {{ textAsValue }}</li>
          <li>Text as object value: {{ textAsObjectValue.value }}</li>
          <li>Text as object reference: {{ textAsObjectReference.value }}</li>
        </ul>
      </div>
      <div>
        <span>Change detections:</span>
        <ul>
          <li *ngFor="let check of checks">{{ check }}</li>
        </ul>
      </div>
      <div class="horizontal-section">
        <app-default-change-detection-grand-child />
        <app-default-change-detection-grand-child />
      </div>
    </div>
  `,
  styles: `
  .child{
    border: solid 1px black;
    border-radius: .25rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem;
  }

  .header{
    display: flex;
    gap: 1rem;
  }
  
  .horizontal-section{
    display: flex;
    gap: 2rem;
  }
  
  .horizontal-section > * {
    flex: 1;
  }`,
})
export class ChildComponent implements DoCheck {
  checks: number[] = [];

  @Input() textAsValue = '';
  @Input() textAsObjectValue: { value: string } = { value: '' };
  @Input() textAsObjectReference: { value: string } = { value: '' };

  ngDoCheck(): void {
    this.checks.push(this.checks.length + 1);
  }

  handleClick() {
    console.log('child component clicked');
  }
}
