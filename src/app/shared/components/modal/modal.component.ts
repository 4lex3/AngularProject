import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  imports: [MatIconModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  public isOpen: boolean = false;

  @Input()
  set openModal(value: boolean) {
    this.isOpen = value;
  }

  @Output() getModalState = new EventEmitter<boolean>();

  public closeModal() : void {
    this.isOpen = false;
    this.getModalState.emit(false);
  }
}
