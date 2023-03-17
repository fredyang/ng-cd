import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'box'
  }
})
export class ClockComponent {
  now$ = interval(1000).pipe(map(_ => new Date()));
}