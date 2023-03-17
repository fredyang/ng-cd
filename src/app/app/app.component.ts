import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User, UserService } from '../user.service';

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

  users$ = this.userService.loadUsers();
 
  current: User;

  select(user: User) {
    this.current = user;
  }
}
