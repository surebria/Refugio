import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MascotasComponent } from '../mascotas/mascotas.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DomseguroPipe } from '../domseguro.pipe';
import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, RouterOutlet, DomseguroPipe, CommonModule],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {
  videoLinks: string[] = [
    'nECntRDbQCk',
    'YPIU5cr-9gE',
    'TCTqwvfcf6k',
    'GltC--_jNzc'
  ];

  donar(): void{
    Swal.fire({
      title: 'Genial!',
      text: 'Muchas gracias por tu donativo, nos será de mucha ayuda',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
}
