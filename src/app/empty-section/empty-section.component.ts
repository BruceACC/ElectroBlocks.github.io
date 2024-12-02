import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-section',
  imports: [],
  templateUrl: './empty-section.component.html',
  standalone: true,
  styleUrl: './empty-section.component.css'
})
export class EmptySectionComponent {
  selectOption(option: number) {
    console.log(`Opción ${option} seleccionada`);
    // Aquí puedes agregar lógica adicional para cada opción
  }

}
