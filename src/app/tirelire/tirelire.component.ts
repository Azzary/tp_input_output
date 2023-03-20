import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tirelire',
  templateUrl: './tirelire.component.html',
  styleUrls: ['./tirelire.component.css']
})
export class TirelireComponent {

  @Input() number: number = 0;
  @Input() value: number = 0;



  spend() {
    console.log("sdfsdf");
  }

}