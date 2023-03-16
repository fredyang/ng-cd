import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, tap, interval } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    class: 'box',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(public userService: UserService) { }


  myprofile$ : any;

  count = 0;

  now$ = interval(1000).pipe(map(_ => new Date()));


  increment() {
    this.count++;
  }

  getMyProfile() {
    this.myprofile$ = this.userService.getProfile();
  }
}
