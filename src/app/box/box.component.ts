import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  tirelires = [
    { number: 1, value: 0 },
    { number: 2, value: 0 },
    { number: 3, value: 0 }
  ];

  addMoney() {
    const tirelire = Math.floor(Math.random() * 3) + 1;
    if (tirelire === 1) {
      this.tirelires[0].value += 100;
    } else if (tirelire === 2) {
      this.tirelires[1].value += 100;
    } else {
      this.tirelires[2].value += 100;
    }
  }

  onSpent(value: any) {
    console.log(value)
    if (value === 1) {
      this.tirelires[0].value = 0;
    } else if (value === 2) {
      this.tirelires[1].value = 0;
    } else {
      this.tirelires[2].value = 0;
    }
  }
}