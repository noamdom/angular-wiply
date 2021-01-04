import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service'
import { Color } from '../../models/color'

@Component({
  selector: 'app-colors-grid',
  templateUrl: './colors-grid.component.html',
  styleUrls: ['./colors-grid.component.css']
})
export class ColorsGridComponent implements OnInit {
  colors: Color[];

  constructor(private colorService: ColorsService) {

  }

  ngOnInit(): void {
    this.colorService.getColors().subscribe(colors => {
      console.log(colors);
      this.colors = colors;
    })
  }

}
