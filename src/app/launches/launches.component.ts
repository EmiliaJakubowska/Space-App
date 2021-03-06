import { Component, OnInit } from '@angular/core';

import { LaunchService } from '../launch.service';


@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
 
  latestLaunch = {}
  getLatestLaunch() { 
    this.latestLaunch = this.launchService.getLatestLaunch().subscribe( response => {
      this.latestLaunch = response
    })
  
  }
  upcomingLaunch;
  getUpcomingLaunch() { 
    this.upcomingLaunch = this.launchService.getUpcomingLaunch().subscribe( response => {
      this.upcomingLaunch = response
    })
  
  }
  constructor(private launchService: LaunchService) { }
  ngOnInit() {
    this.getLatestLaunch()
    this.getUpcomingLaunch()
  }
}
