import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { IconsService } from '../../core/services/icons/Icons.service';
import { MusicPlayerComponent } from "../../shared/components/music-player/music-player.component";
import { IAudioItem } from '../../shared/components/music-player/models/AudioItem';
import { SONGS } from '../../core/models/Songs';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, MatIconModule, FooterComponent, MusicPlayerComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  public songs: IAudioItem[] = SONGS;
  constructor(private iconService: IconsService) {}

}

