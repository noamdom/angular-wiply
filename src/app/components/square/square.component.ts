import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'src/app/models/Color';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() color: Color;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor() {
    const randomHex = this.getRandomColor();
    this.color.hex = randomHex;
  }


  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
