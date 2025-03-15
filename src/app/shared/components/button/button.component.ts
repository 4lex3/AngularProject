import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() type: string = "";

  @Input() disabled: boolean = false;
  @Input() enableWhen: boolean = false;

  @Input() handleClick: (event: Event) => void = (event: Event) => {
    console.log('Handle click default behavior', event);
  };


}
