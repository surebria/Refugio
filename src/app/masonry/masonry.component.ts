import { Component } from '@angular/core';
import { InfoService } from '../services/informacion/info.service';
import { ImagenaleatoriaComponent } from '../imagenaleatoria/imagenaleatoria.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-masonry',
  standalone: true,
  imports: [ImagenaleatoriaComponent, CommonModule, RouterModule],
  templateUrl: './masonry.component.html',
  styleUrl: './masonry.component.css'
})
export class MasonryComponent {

  //Servicio para obtener datos del arreglo para la informacion de las mascotas
  constructor(public mascotasServicio: InfoService){}

}
