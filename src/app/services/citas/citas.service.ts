import { Injectable } from '@angular/core';
import { Datos } from '../interface/datosAdopcion';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  citas!: Datos[];

  constructor() {
    this.citas=JSON.parse(localStorage.getItem("registros") || '[]');  
  }

  getCita(posicion: number):Datos{
    return this.citas[posicion];
  }

  searchCita(nomDueno: string):number{
    let index = this.citas.findIndex(p=> p.nombreDueno === nomDueno)
    return index;
  }
}
