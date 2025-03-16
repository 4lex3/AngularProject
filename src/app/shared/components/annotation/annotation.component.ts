import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-annotation',
  imports: [CommonModule],
  templateUrl: './annotation.component.html',
  styleUrl: './annotation.component.scss'
})
export class AnnotationComponent implements OnInit{

  public hiddenCover: boolean = false;
  @Output() onCoverHover = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.handleCoverClick = this.handleCoverClick.bind(this);
  }

  public handleHover(state: boolean): void {
    this.onCoverHover.emit(state);
  }

  public handleCoverClick(): void {
    this.hiddenCover = true;
  }
}
