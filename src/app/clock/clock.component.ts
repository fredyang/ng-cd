import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'box',
  },
})
export class ClockComponent implements OnDestroy {
  handle: number;
  constructor(cd: ChangeDetectorRef, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      this.handle = setInterval(() => {
        this.now = new Date();
        cd.detectChanges();
      }, 1000);
    });
  }
  
  ngOnDestroy(): void {
    clearInterval(this.handle);
  }

  now: Date;
}
