import { Component } from '@angular/core';
import { ImagenService } from '../services/API/imagen.service';

@Component({
  selector: 'app-imagenaleatoria',
  standalone: true,
  imports: [],
  templateUrl: './imagenaleatoria.component.html',
  styleUrl: './imagenaleatoria.component.css'
})
export class ImagenaleatoriaComponent {

  datos: datos[]=[];

  //Servicio para obtener una imagen aleatoria de una API de mascotas
  constructor(public imagenServicio: ImagenService){}

  ngOnInit() {
    console.log('En este instante el componente ha cargado');
    this.recuperarDatos();
  }

  recuperarDatos() {
    console.log('Entré');
    this.imagenServicio.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => console.log(err)
    });
  }

  successRequest(data: any): void {
    console.log("Data ", data);
    this.datos = [{message: data.message, status: data.status}];
    console.log("Array ", this.datos);
  }
}

interface datos{
  message: string;
  status: string;
}
