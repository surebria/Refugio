import { Component } from '@angular/core';
import { Datos } from '../services/interface/datosAdopcion';
import { CommonModule } from '@angular/common';
import { CitasComponent } from '../citas/citas.component';

@Component({
  selector: 'app-pagina-citas',
  standalone: true,
  imports: [CommonModule, CitasComponent],
  templateUrl: './pagina-citas.component.html',
  styleUrl: './pagina-citas.component.css'
})
export class PaginaCitasComponent {

  numCitas: number=0;
  fechasRecibibas: string[]=[];
  fechaActString: string=new Date().toDateString();
  fechaAct: Date=new Date(Date.parse(this.fechaActString));

  constructor(){
    console.log("Numero de citas: ",this.numCitas);
  }

  procesarMensaje(mensaje: number){
    console.log("Mensaje enviado:", mensaje);
    this.numCitas=mensaje;
  }

  procesarFechas(fechas: string[]){
    console.log("Fechas enviadas:", fechas);
    this.fechasRecibibas=fechas;
  }

  convertirFechas(i: number): any{
    const fecha = new Date(Date.parse(this.fechasRecibibas[i]));
    return fecha;
  }
}
