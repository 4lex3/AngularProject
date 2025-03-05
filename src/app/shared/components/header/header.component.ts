import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input({required: true}) headerTitle!: string;
  public showMobileOptions: boolean = false;

  

  public onClickButtonOptions(){
    this.showMobileOptions = !this.showMobileOptions ? true : false;
  }

}