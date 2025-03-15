import { Component, Input } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-form',
  imports: [ModalComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Input() onSubmit!: ($e: Event) => void ;
  @Input() method: string = 'POST';

}
