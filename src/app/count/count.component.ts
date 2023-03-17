import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() count = 0;

  increment() {
    this.count++;
  }
}