import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  host: {
    'class': 'box'
  }
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  now$ = interval(1000).pipe(map(_ => new Date()));
}