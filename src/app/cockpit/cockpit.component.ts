import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output('srvCreated') serverCreated = new EventEmitter<{ServerName: string, ServerContent: string}>();
  @Output('blpCreated') blueprintCreated = new EventEmitter<{ServerName: string, ServerContent: string}>();
  newServerName='';
  newServerContent='';

  onAddServer() {
    this.serverCreated.emit({ServerName: this.newServerName, ServerContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ServerName: this.newServerName, ServerContent: this.newServerContent});
  }

}
