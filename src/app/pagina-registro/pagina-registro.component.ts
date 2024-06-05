import { Component, Input } from '@angular/core';
import { Mascota } from '../services/interface/mascotas';
import { InfoService } from '../services/informacion/info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule} from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {MatExpansionModule} from '@angular/material/expansion';
import { Datos } from '../services/interface/datosAdopcion';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-registro',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, 
    MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, CommonModule],
  templateUrl: './pagina-registro.component.html',
  styleUrl: './pagina-registro.component.css'
})
export class PaginaRegistroComponent {
  @Input() mascota!: Mascota;

  nombreDueno: string='';
  numeroDueno: string='';
  hora: string='';
  fecha!: Date;
  fechaActual: Date=new Date();
  fechaForm!: string;

  nombreMascota: string='';
  idMascota: number=0;
  edadMascota: string='';
  colorMascota: string='';
  razaMascota: string='';
  tiempoMascota: string='';
  descMascota: string='';

  citasReservadas!: Datos[];
  llenado!: any;

  fechasReservadas!: any;

  constructor(public mascotaServicio:InfoService, public activatedRoute: ActivatedRoute,
    public router: Router){
    this.activatedRoute.params.subscribe(params =>{
      this.mascota=mascotaServicio.getMascota(params['idRegistro']);
    })

    this.nombreMascota=this.mascota.nombre;
    this.idMascota=this.mascota.id;
    this.edadMascota=this.mascota.edad;
    this.colorMascota=this.mascota.color;
    this.razaMascota=this.mascota.raza;
    this.tiempoMascota=this.mascota.tiempo;
    this.descMascota=this.mascota.descripcion;
  }

  panelOpenState = false;

  ngOnInit(){
    console.log("Soy el ngOnInit, en este momento el componente ha cargado");
    this.citasReservadas=JSON.parse(localStorage.getItem("registros") || '[]');
    console.log(this.citasReservadas);  
    // this.fechasReservadas = this.citasReservadas.map(registro => registro.fecha);
    this.fechasReservadas = this.citasReservadas.map(registro => {
      return { fecha: registro.fecha, nombre: registro.nombre, hora: registro.hora };
    });
    console.log("Citas: ", this.fechasReservadas);
  }

  subir(): void{
    const [hora, minuto] = this.hora.split(":");
    if(this.citasReservadas.length==0){
      if((Number(hora)) < 10 || (Number(hora)) > 20){
        Swal.fire({
          title: 'Ups!',
          text: 'La hora que has seleccionado está fuera de nuestro horario de atención. Por favor, selecciona otra hora entre 10 am y 8 pm',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'Perfecto',
          text: 'Tu cita ha sido agendada para conocer a tu nuevo amigo',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("SE CONFIRMÓ");
            this.enviarDatos();
            this.router.navigate(['/home']);
          }
        });
      }
    }else{
      if((Number(hora)) < 10 || (Number(hora)) > 20){
        Swal.fire({
          title: 'Ups!',
          text: 'La hora que has seleccionado está fuera de nuestro horario de atención. Por favor, selecciona otra hora entre 10 am y 8 pm',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'Perfecto',
          text: 'Tu cita ha sido agendada para conocer a tu nuevo amigo',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("SE CONFIRMÓ");
            this.enviarDatos();
            this.router.navigate(['/home']);
          }
        });
      }
    }
  }

  llenarArreglo(): Datos{
   return{
      id: this.idMascota,
       nombre: this.nombreMascota,
       edad: this.edadMascota,
       color: this.colorMascota,
       raza: this.razaMascota,
       tiempo: this.tiempoMascota,
       descripcion: this.descMascota,
       nombreDueno: this.nombreDueno,
       numeroDueno: this.numeroDueno,
       hora: this.hora,
       fecha: this.fechaForm
   };
 }

  enviarDatos(): void{
    this.fechaForm=this.fecha.toDateString();
    console.log(this.nombreMascota);
    console.log(this.nombreDueno);
    console.log(this.hora);
    console.log(this.numeroDueno);
    console.log(this.fechaForm);
    this.llenado = this.llenarArreglo();
    console.log("Llenado", this.llenado);
    this.citasReservadas.push(this.llenado);
    localStorage.setItem('registros', JSON.stringify(this.citasReservadas));
    this.borrarDatos();
  }

  borrarDatos(): void{
    this.nombreDueno='';
    this.numeroDueno='';
    this.fecha=new Date();
    this.hora='';
    this.fechaForm='';
  }

  deshabilitarFechas = (date: Date | null): boolean => {
    if (this.citasReservadas.length === 0) {
      return true; // Si no existen citas, entonces desbloquea todas las fechas
    } else if (date === null) {
      return true;
    } else {
      for (const citaReservada of this.fechasReservadas) {
        if (citaReservada.fecha == date.toDateString() && citaReservada.nombre == this.nombreMascota) {
          return false; //La fecha ya está reservada
        }
      }
      return true; // La fecha está disponible
    }
  };

}
