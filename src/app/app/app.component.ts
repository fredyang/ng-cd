import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User, Api } from '../api.service';

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

  constructor(public api: Api) { }

  users$ = this.api.loadUsers();
 
  count = 0;
  
  selectedUser: User;

 
}
