import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-upcoming',
  templateUrl: './launch-upcoming.component.html',
  styleUrls: ['./launch-upcoming.component.css']
})
export class LaunchUpcomingComponent implements OnInit {

  @Input() launch: Object;

  constructor() { }

  ngOnInit() {
  }

}
