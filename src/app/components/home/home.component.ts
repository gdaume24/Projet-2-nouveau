import { Component } from '@angular/core';
import { GraphicTitleComponent } from '../graphic-title/graphic-title.component';
import { InformativeSquareComponent } from '../informative-square/informative-square.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GraphicTitleComponent, InformativeSquareComponent, PieChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
