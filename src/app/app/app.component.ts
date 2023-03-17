import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, interval } from 'rxjs';
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


 
}
