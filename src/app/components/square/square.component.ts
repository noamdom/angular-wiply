import { Component, OnInit , Input } from '@angular/core';
import { Color } from 'src/app/models/Color';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() color: Color;
  // colorObj : Color;

  constructor() { 
    // this.colorObj = this.color
  }

  ngOnInit(): void {
  }

  changeColor() {
    const randomHex = this.getRandomColor();
      console.log(randomHex)
    this.color.color = randomHex;
  }


  
getRandomColor() {
   return '#' + Math.floor(Math.random()*16777215).toString(16);
  
}

}
