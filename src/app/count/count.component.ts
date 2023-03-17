import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'box'
  }
})
export class CountComponent  {

  constructor() { }
  @Input() count = 0;

  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}