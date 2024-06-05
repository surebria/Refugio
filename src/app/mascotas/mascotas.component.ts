import { Component } from '@angular/core';
import { MasonryComponent } from '../masonry/masonry.component';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [MasonryComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {

}
