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

  /**
   * This Function changes the square color and calls to 'colorService' for updating in the DB too.
   */
  changeColor() {
    const randomHex = this.getRandomColor();
    this.color.hex = randomHex;
    this.colorService.updateHexColor(this.color);
  }

  /**
  * This Function generate a random color using (hex)
  */
  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
