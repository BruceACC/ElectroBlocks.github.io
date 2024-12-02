import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'ElectroBlocks';

  constructor(private router: Router) {}

  navigateToSection() {
    this.router.navigate(['/new-section']); // Asegúrate de configurar esta ruta
  }
}
