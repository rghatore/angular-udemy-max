import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // typically use this selector for components
  // selector: '[app-servers]', // attribute selector: <div app-servers></div>
  // selector: '.app-servers', // class selector: <div class="app-servers"></div>
  // selector: '#app-servers', // id selector is NOT supported
  // templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css'],
  // styles: ['h3 { color: pink }'] // can also use inline styles
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
