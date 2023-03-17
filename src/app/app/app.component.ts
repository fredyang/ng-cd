import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Api, User } from '../api.service';

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

  constructor(public api: Api) {
    setInterval(() => {
      this.updateTime();
    }, 1000);

    this.api.loadUsers().subscribe((users) => {
      this.users = users;
    });
  }

  users: User[];

  selectedUser: User;

  count = 0;
  now = new Date();

  updateTime() {
    this.now = new Date();
  }

  increment() {
    this.count++;
  }
}
