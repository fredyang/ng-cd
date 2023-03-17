import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { Api, User } from '../api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    class: 'box',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private api: Api) {}
  users$ = this.api.loadUsers();
  selectedUser: User;
  count = 0;
  now$ = interval(1000).pipe(map((_) => new Date()));
  increment() {
    this.count++;
  }
}
