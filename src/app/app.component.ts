import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test server', content: 'It is for a test only'}];

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
