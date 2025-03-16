import { Component, Input, OnInit } from '@angular/core';
import { ICarousel } from './models/Carousel';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [MatIconModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input({ required: true }) carouselObj!: ICarousel[];
  public imageLoad: boolean = false;

  private index: number = 0;

  ngOnInit(): void {
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.nextImage.bind(this);
  }

  public nextImage(): ICarousel {

    this.imageLoad = false;
    this.index++;

    if (this.index >= this.carouselObj.length) {
      this.index = 0;
    }

    return this.carouselObj[this.index];
  }

  public previousImage(): ICarousel {

    this.imageLoad = false;
    this.index--;

    if (this.index < 0) {
      this.index = this.carouselObj.length - 1;
    }

    return this.carouselObj[this.index];
  }

  onImageLoad(): void {
    this.imageLoad = true;
  }

  public getCurrentImage() : ICarousel {
    return this.carouselObj[this.index];
  }
}
