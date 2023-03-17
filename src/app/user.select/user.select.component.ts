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

  @Input() users: any;

  @Output() select = new EventEmitter();
}