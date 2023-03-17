import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user.select.component.html',
  styleUrls: ['./user.select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() users: User[];
}