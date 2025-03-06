import { Component, Input } from '@angular/core';
import { IAudioItem } from './models/AudioItem';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-player',
  imports: [MatIconModule, CommonModule],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {

  @Input({ required: true }) audios!: IAudioItem[];
  private currentAudioIndex: number = 0

  public isPlaying: boolean = false;
  public isFavorite: boolean = false;
  public isPlayingVolume: boolean = false;


  public get currentAudio(): IAudioItem {
    return this.audios[this.currentAudioIndex];
  }



   




  onPlaying(){
    this.isPlaying = !this.isPlaying;
  }

  onClickFavorite(){
    this.isFavorite = !this.isFavorite;
  }

  onClickVolume(){
    this.isPlayingVolume = !this.isPlayingVolume;
  }
}
