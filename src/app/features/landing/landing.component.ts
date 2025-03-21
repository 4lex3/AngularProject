import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { IconsService } from '../../core/services/icons/Icons.service';
import { MusicPlayerComponent } from "../../shared/components/music-player/music-player.component";
import { IAudioItem } from '../../shared/components/music-player/models/AudioItem';
import { SONGS } from '../../core/models/Songs';
import { FormComponent } from "../../shared/components/form/form.component";
import { InputComponent } from "../../shared/components/input/input.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { VideoPlayerComponent } from "../../shared/components/video-player/video-player.component";
import { AnnotationComponent } from "../../shared/components/annotation/annotation.component";
import { CommonModule } from '@angular/common';
import { Social, Socials } from '../../core/models/Socials';
import { CarouselComponent } from "../../shared/components/carousel/carousel.component";
import { ICarousel } from '../../shared/components/carousel/models/Carousel';
import { CarouselStates } from '../../core/models/Carousel';


@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, MatIconModule, FooterComponent, MusicPlayerComponent, FormComponent, InputComponent, ButtonComponent, ModalComponent, VideoPlayerComponent, AnnotationComponent, CommonModule, CarouselComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{

  public songs: IAudioItem[] = SONGS;
  public formIsValid: boolean = false;
  public openModal: boolean = false;
  public iconService = inject(IconsService);
  public annotationHover: boolean = false;
  public socials: Social[] = Socials;
  public carouselImages: ICarousel[] = CarouselStates;

  private formValues: Record<string, string> = {
    name:  "",
    email: "",
    message: "",
  };


  ngOnInit(): void {
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }


  public validateForm({ name, value }: { name: string, value: string}) {

    this.formValues[name] = value;

    const isNameValid = !!this.formValues['name'] && this.formValues['name'].length > 3;
    const isEmailValid = !!this.formValues['email'] && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formValues['email']);
    const isMessageValid = !!this.formValues['message'] && this.formValues['message'].length > 3;

    this.formIsValid = isNameValid && isEmailValid && isMessageValid;
  }

  public onSubmitForm(e: Event): void {
    e.preventDefault();
    this.openModal = true;
  }

  public getModalState(modalState: boolean): void {
    this.openModal = modalState;    
  }

  public handleHover(isAnHover: boolean) : void{
    this.annotationHover = isAnHover;
  }

}

