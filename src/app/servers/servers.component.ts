import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // typically use this selector for components
  // selector: '[app-servers]', // attribute selector: <div app-servers></div>
  // selector: '.app-servers', // class selector: <div class="app-servers"></div>
  // selector: '#app-servers', // id selector is NOT supported
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css'],
  // styles: ['h3 { color: pink }'] // can also use inline styles
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created!";
  serverName: string = 'test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    // console.log("click click!");
  }

  // not using the method below:
  onUpdateServerName(event: Event) {
    // console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
