import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-default-change-detection-grand-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grand-child">
      <div class="header">
        <span>Grand-Child Component</span>
        <button (click)="handleClick()">click me</button>
      </div>
      <div>
        <span>Change detections:</span>
        <ul>
          <li *ngFor="let check of checks">{{ check }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: `
  .grand-child{
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
  `,
})
export class GrandChildComponent implements DoCheck {
  checks: number[] = [];

  ngDoCheck(): void {
    this.checks.push(this.checks.length + 1);
  }

  handleClick() {
    console.log('grand-child component clicked');
  }
}
