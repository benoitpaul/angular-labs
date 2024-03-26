import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-onpush-change-detection-root',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <div class="root">
      <div class="header">
        <span>Root Component</span>
        <button (click)="handleClick()">click me</button>
        <input type="text" (keyup)="handleKeyUp($event)" />
      </div>
      <div>
        <span>Change detections:</span>
        <ul>
          <li *ngFor="let check of checks">{{ check }}</li>
        </ul>
      </div>
      <div class="horizontal-section">
        <app-onpush-change-detection-child
          [textAsValue]="text"
          [textAsObjectValue]="textAsObjectValue"
          [textAsObjectReference]="textAsObjectReference"
        />
        <app-onpush-change-detection-child
          [textAsValue]="text"
          [textAsObjectValue]="textAsObjectValue"
          [textAsObjectReference]="textAsObjectReference"
        />
      </div>
    </div>
  `,
  styles: `
  .root{
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
export class RootComponent implements DoCheck {
  checks: number[] = [];
  text = '';
  textAsObjectValue = { value: '' };
  textAsObjectReference = { value: '' };

  ngDoCheck(): void {
    this.checks.push(this.checks.length + 1);
  }

  handleClick() {
    console.log('root component clicked');
  }

  handleKeyUp(event: Event) {
    console.log('root component keyup');
    this.text = (event.target as HTMLInputElement).value;
    this.textAsObjectValue.value = (event.target as HTMLInputElement).value;
    this.textAsObjectReference = {
      value: (event.target as HTMLInputElement).value,
    };
  }
}
