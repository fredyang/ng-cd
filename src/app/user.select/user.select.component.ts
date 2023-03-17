import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user.select.component.html',
  styleUrls: ['./user.select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() users: User[];

  current: User;

  @Output() select = new EventEmitter<User>();

  onSelect(user: User) {
    console.log('onSelect', user);
    this.select.emit(user);
  }
}