import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  breakpoints = {
    mobile: '(max-width: 768px)',
    desktop: '(min-width: 768px)',
  }

  isMobile: Observable<boolean>

  constructor(private breakPointsObserver: ) {

   }


}
