import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service'
import { Color } from '../../models/Color'

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
      this.colors = colors;
    })
  }

}
