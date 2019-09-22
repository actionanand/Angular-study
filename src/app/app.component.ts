import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(eventData: {ServerName: string, ServerContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: eventData.ServerName,
      content: eventData.ServerContent
    });
  }

  onBlueprintAdded(eventData: {ServerName: string, ServerContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.ServerName,
      content: eventData.ServerContent
    });
  }


}
