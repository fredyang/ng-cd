import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../api.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user.select.component.html',
  styleUrls: ['./user.select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'box'
  }
})
export class UserSelectComponent  {

  @Input() users: User[];

  selected: User;

  @Output() select = new EventEmitter<User>();

  onSelect(user: User) {
    this.select.emit(user);
  }
}