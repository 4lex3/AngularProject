import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'

})
export class IconsService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerCustomIcons();
  }

  registerCustomIcons(): void {

    const icons: string[] = ['github', 'telegram', 'whatsapp', 'yt'];

    icons.forEach(iconName=> {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(`svg/icons/${iconName}.svg`)
      )
    });

    console.log("Iconos registrados");

  }
}
