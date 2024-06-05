import { Component, Input } from '@angular/core';
import { Datos } from '../services/interface/datosAdopcion';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CitasService } from '../services/citas/citas.service';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  @Input() citaRecibida!:Datos;
  constructor(public citaServicio:CitasService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.citaRecibida=citaServicio.getCita(params['id']);
    })
  }
}
