import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ FormsModule ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input({required: true}) name!: string; 
  @Input() type: string = 'text'; 
  @Input() required: boolean = false;
  @Input() label!: string; 
  @Input() placeHolder: string = ''; 
  @Input() textArea: boolean = false;
  @Input() isValidWhen: boolean = false;


  public value: string = "";
  @Output() getValue= new EventEmitter<{name: string, value: string}>();

  public emitValue() : void{
    this.getValue.emit({name: this.name, value: this.value});
  }

}
