import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'src/app/models/Color';
import {ColorsService } from '../../services/colors.service'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() color: Color;

  constructor(private colorService : ColorsService) {
  }

  ngOnInit(): void {}

  changeColor() {
    const randomHex = this.getRandomColor();
    this.color.hex = randomHex;
    this.colorService.updateHexColor(this.color);
  }


  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
