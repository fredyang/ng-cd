import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../api.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user.select.component.html',
  styleUrls: ['./user.select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectComponent  {

  constructor() { }


  @Input() users: User[];

  selected: User;

  @Output() select = new EventEmitter<User>();

  onSelect(user: User) {
    this.select.emit(user);
  }
}