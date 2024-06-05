import { Component } from '@angular/core';
import { Datos } from '../services/interface/datosAdopcion';
import { CitasService } from '../services/citas/citas.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from '../buscar/buscar.component';

@Component({
  selector: 'app-pagina-buscar',
  standalone: true,
  imports: [CommonModule, BuscarComponent],
  templateUrl: './pagina-buscar.component.html',
  styleUrl: './pagina-buscar.component.css'
})
export class PaginaBuscarComponent {
  nombre: string="";
  indice: number=0;

  cita: Datos={
    id: 0,
    nombre: "",
    edad: "",
    color: "",
    raza: "",
    tiempo: "",
    descripcion: "",
    nombreDueno: "",
    numeroDueno: "",
    hora: "",
    fecha: "",
  };

  constructor(private citasServicio:CitasService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.nombre=params['nombre'];
      this.indice=this.citasServicio.searchCita(this.nombre);
      console.log(this.indice);

      if(this.indice!=-1){
        this.cita=this.citasServicio.getCita(this.indice);
      }
    });
  }

  getAlineacion(): any{
    return "center";
  }

  getColorFondo(): any{
    return "beige";
  }

  getWidth(): any{
    return "40%";
  }

  getMargin(): any{
    return "0 auto";
  }

  getPadding(): any{
    return "40px";
  }
}
