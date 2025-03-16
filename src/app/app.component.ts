import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from "./shared/components/carousel/carousel.component";
import { ICarousel } from './shared/components/carousel/models/Carousel';
import { CarouselStates } from './core/models/Carousel';
import { ButtonComponent } from "./shared/components/button/button.component";
import { InputComponent } from "./shared/components/input/input.component";
import { LandingComponent } from "./features/landing/landing.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularProject';
  carouserStates: ICarousel[] = CarouselStates;

}
