import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  host: {
    'class': 'box'
  }
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}