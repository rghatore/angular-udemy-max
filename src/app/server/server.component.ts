import { Component } from "@angular/core";

// component declarator for the ServerComponent class
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
