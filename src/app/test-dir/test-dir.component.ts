import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-dir',
  templateUrl: './test-dir.component.html',
  styleUrls: ['./test-dir.component.scss']
})
export class TestDirComponent implements OnInit {

  isDisabled:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleChange(){
    this.isDisabled = !this.isDisabled
  }

}
