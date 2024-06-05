import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-bienvenida',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pagina-bienvenida.component.html',
  styleUrl: './pagina-bienvenida.component.css'
})
export class PaginaBienvenidaComponent {
}
