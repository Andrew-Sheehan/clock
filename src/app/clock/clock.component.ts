import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  currentTime = new Date();

  constructor() { }

  ngOnInit() {
    window.setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
