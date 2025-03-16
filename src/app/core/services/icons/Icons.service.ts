import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'

})
export class IconsService {

  public icons: string[] = ['github', 'telegram', 'whatsapp', 'yt', 'annotation', 'auto', 'casa', 'robot'];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerCustomIcons();
  }

  registerCustomIcons(): void {


    this.icons.forEach(iconName => {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(`svg/icons/${iconName}.svg`)
      )
    });

    console.log("Iconos registrados");

  }
}
