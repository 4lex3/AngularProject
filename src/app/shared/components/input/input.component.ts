import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input({required: true}) name!: string; 
  @Input() type: string = 'text'; 

  @Input() label!: string; 
  @Input() placeHolder: string = ''; 



}
