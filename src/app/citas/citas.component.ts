import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Datos } from '../services/interface/datosAdopcion';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent implements OnInit{
  citas!: Datos[];
  mensaje!: number;
  fechas!: string[];
  @Output() propagar = new EventEmitter<number>();
  @Output() propagarFechas = new EventEmitter<string[]>();

  @Input() fechaImprimir!: string;

  constructor(){
    this.citas=JSON.parse(localStorage.getItem("registros") || '[]');
    this.fechas = [];
  }

  ngOnInit(){
    this.mensaje=this.citas.length;
    for(const cita of this.citas){
      this.fechas.push(cita.fecha);
    }
    console.log("Fechas: ", this.fechas);
    console.log("Estoy propagando: ", this.mensaje);
    this.propagar.emit(this.mensaje);
    this.propagarFechas.emit(this.fechas);
  }

}
