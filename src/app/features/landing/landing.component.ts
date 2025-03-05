import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  public showOptions: boolean = false;

 }
