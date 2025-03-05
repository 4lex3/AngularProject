import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Input() onSubmit!: Function;
  @Input() method: string = 'POST';


}
