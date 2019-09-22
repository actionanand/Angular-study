import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output('srvCreated') serverCreated = new EventEmitter<{ServerName: string, 
    ServerContent: string}>();
  @Output('blpCreated') blueprintCreated = new EventEmitter<{ServerName: string, 
    ServerContent: string}>();

  @ViewChild('serverContentInput',{static: true}) serverContentInput: ElementRef;

  onAddServer(serverInput: HTMLInputElement) {
    this.serverCreated.emit({
      ServerName: serverInput.value, 
      ServerContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      ServerName: serverInput.value, 
      ServerContent: this.serverContentInput.nativeElement.value});
  }

}
