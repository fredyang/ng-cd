import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'box'
  }
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  myprofile$ : any;
  getProfile() {
    this.myprofile$ = this.http.get('https://api.github.com/users/fredyang');
  }
}