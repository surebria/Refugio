import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Mascota } from '../services/interface/mascotas';
import { InfoService } from '../services/informacion/info.service';

@Component({
  selector: 'app-pagina-detalles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pagina-detalles.component.html',
  styleUrl: './pagina-detalles.component.css'
})
export class PaginaDetallesComponent {
  @Input() mascota!: Mascota;
  registroId: number=0;

  constructor(public mascotaServicio:InfoService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.mascota=mascotaServicio.getMascota(params['id']);
      this.registroId=this.mascota.id-1;
    })
  }
}
