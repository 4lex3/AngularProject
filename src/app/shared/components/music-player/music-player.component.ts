import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  public inputProgress: number = 0

  @ViewChild('audio') audioElement!: ElementRef<HTMLAudioElement>;


  public get currentAudio(): IAudioItem {
    return this.audios[this.currentAudioIndex];
  }


  previousSong(): void{

    if(this.currentAudioIndex <= 0){
      this.currentAudioIndex = this.audios.length - 1;
      return;
    }    

    this.currentAudioIndex--;
  }

  nextSong(): void {

    if(this.currentAudioIndex >= this.audios.length - 1){
      this.currentAudioIndex = 0; 
      return;
    }

    this.currentAudioIndex++; 
  }


  onPlaying(): void {

    this.isPlaying = !this.isPlaying;

    if (!this.isPlaying) {
      this.audioElement.nativeElement.pause();
      return;
    }

    this.audioElement.nativeElement.play();
  }


  onProgress(): void {

    if (!this.isPlayingVolume) {
      this.inputProgress = (this.audioElement.nativeElement.currentTime / this.audioElement.nativeElement.duration) * 100;
      return;
    }

    this.inputProgress = (this.audioElement.nativeElement.volume / 1) * 100;

  }

  onChangeInputElement(e: Event): void {

    const input = e.target as HTMLInputElement;

    if (!this.isPlayingVolume) {

      const time = (Number(input.value) / 100) * this.audioElement.nativeElement.duration;
      this.audioElement.nativeElement.currentTime = time;

      return;
    }

    const volume = (Number(input.value) / 100) * 1;
    this.audioElement.nativeElement.volume = volume;
  }

  onClickFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  onClickVolume(): void {
    this.isPlayingVolume = !this.isPlayingVolume;
  }

}
