import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video-player',
  imports: [FormsModule, MatIconModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent implements AfterViewInit {

  @ViewChild('videoElement', { static: false }) video!: ElementRef<HTMLVideoElement>;
  @Input() videoSrc: string = "";

  isPlaying = false;
  isMuted = false;
  progress = 0;
  duration = 0;

  ngAfterViewInit() {

    if (this.video && this.video.nativeElement) {

      const video = this.video.nativeElement;
      video.onloadedmetadata = () => this.duration = video.duration;
      video.ontimeupdate = () => this.updateProgress();

    }

  }

  togglePlay() {

    const video = this.video.nativeElement;

    if (this.isPlaying) {
      video.pause();

    } else {
      video.play().catch(err => console.error("Error al intentar reproducir el video:", err));
    }

    this.isPlaying = !this.isPlaying;
  }

  rewind() {
    const video = this.video.nativeElement;
    video.currentTime -= 5;

  }

  fastForward() {
    const video = this.video.nativeElement;
    video.currentTime += 5;

  }

  toggleMute() {
    const video = this.video.nativeElement;
    video.muted = !video.muted;
    this.isMuted = video.muted;
  }

  toggleFullscreen() {
    const video = this.video.nativeElement;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }

  }

  seekVideo(event: Event) {
    const input = event.target as HTMLInputElement;
    const video = this.video.nativeElement;
    video.currentTime = (parseFloat(input.value) / 100) * video.duration;

  }

  updateProgress() {
    const video = this.video.nativeElement;
    this.progress = (video.currentTime / video.duration) * 100;
  }

}