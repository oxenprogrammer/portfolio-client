import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'emmisteel',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/emmisteel.svg')
    );
  }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }
}
