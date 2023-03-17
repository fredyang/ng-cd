import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() users: User[];
}