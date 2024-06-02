import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-carousal',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.css'
})
export class CarousalComponent {

}
