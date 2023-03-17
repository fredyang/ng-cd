import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user.display.component.html',
  styleUrls: ['./user.display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'box'
  }
})
export class UserDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() user: User;
  
 
}