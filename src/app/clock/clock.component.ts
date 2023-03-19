import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';


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
  constructor( cd: ChangeDetectorRef,  ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.now = new Date();
        cd.detectChanges();
      } , 1000);
    });
  }

  now: Date;

}