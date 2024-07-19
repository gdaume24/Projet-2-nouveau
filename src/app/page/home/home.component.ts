import { Component } from '@angular/core';
import { GraphicTitleComponent } from '../../components/graphic-title/graphic-title.component';
import { InformativeSquareComponent } from '../../components/informative-square/informative-square.component';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GraphicTitleComponent,
    InformativeSquareComponent,
    PieChartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
