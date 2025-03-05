import { Component, Input } from '@angular/core';
import { ICarousel } from './models/Carousel';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [MatIconModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input({ required: true }) carouselObj!: ICarousel[];
  private index: number = 0;
  public imageLoad: boolean = false;

  public getCurrentImage() {
    return this.carouselObj[this.index];
  }

  public nextImage(): ICarousel {

    this.index++;
    this.imageLoad = false; 

    if (this.index >= this.carouselObj.length) {
      this.index = 0;
    }

    return this.carouselObj[this.index];
  }

  public previousImage(): ICarousel {
    this.index--;
    this.imageLoad = false; 

    if (this.index < 0) {
      this.index = this.carouselObj.length - 1;
    }

    return this.carouselObj[this.index];
  }

}
