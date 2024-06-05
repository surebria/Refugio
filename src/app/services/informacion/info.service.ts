import { Injectable } from '@angular/core';
import { Mascota } from '../interface/mascotas';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  mascotas: Mascota[] = [
    {
      id: 1,
      nombre: 'Toby',
      edad: '3 años',
      color: 'Marrón',
      raza: 'Mestizo',
      tiempo: '6 meses',
      descripcion:
        'Toby es un perro muy cariñoso y juguetón. Le encanta recibir mimos y pasear. Es bastante tranquilo en casa.',
    },
    {
      id: 2,
      nombre: 'Luna',
      edad: '1 año',
      color: 'Negra',
      raza: 'Labrador Retriever ',
      tiempo: '2 meses',
      descripcion:
        'Luna es una perra muy activa y enérgica. Disfruta de las caminatas largas y los juegos al aire libre. Es obediente y aprende rápido.',
    },
    {
      id: 3,
      nombre: 'Rocky',
      edad: '5 años',
      color: 'Gris',
      raza: 'Schnauzer ',
      tiempo: '9 meses',
      descripcion:
        'Rocky es un perro leal y protector. Aunque puede ser reservado al principio, se vuelve muy cariñoso una vez que gana confianza.',
    },
    {
      id: 4,
      nombre: 'Daisy',
      edad: '2 años',
      color: 'Blanca y marrón ',
      raza: 'Beagle',
      tiempo: '4 meses',
      descripcion:
        'Daisy es una perra muy curiosa y olfatea todo a su alrededor. Es juguetona y le encanta recibir atención.',
    },
    {
      id: 5,
      nombre: 'Max',
      edad: '7 años',
      color: 'Dorado',
      raza: 'Pastor Alemán ',
      tiempo: '1 año',
      descripcion:
        'Max es un perro noble y leal. A pesar de su edad, aún tiene mucha energía y disfruta de las caminatas largas. Es un excelente guardián.',
    },
    {
      id: 6,
      nombre: 'Smokey',
      edad: '4 años',
      color: 'Gris',
      raza: 'Gato doméstico de pelo corto',
      tiempo: '3 meses',
      descripcion:
        'Smokey es un gato tranquilo y cariñoso. Le gusta acurrucarse en los regazos y recibir mimos.',
    },
    {
      id: 7,
      nombre: 'Mitsy',
      edad: '2 años',
      color: 'Blanca y gris ',
      raza: 'Gato doméstico de pelo largo',
      tiempo: '6 meses',
      descripcion:
        'Misty es una gata juguetona y curiosa. Le encanta perseguir juguetes y observar desde lugares altos.',
    },
    {
      id: 8,
      nombre: 'Oliver',
      edad: '6 años',
      color: 'Naranja',
      raza: 'Gato doméstico de pelo corto',
      tiempo: '1 año',
      descripcion:
        'Oliver es un gato independiente pero cariñoso. Disfruta de los mimos ocasionales y de tomar siestas al sol.',
    },
    {
      id: 9,
      nombre: 'Cleo',
      edad: '3 años',
      color: 'Negra',
      raza: 'Gato doméstico de pelo corto',
      tiempo: '5 meses',
      descripcion:
        'Cleo es una gata juguetona y enérgica. Le encanta escalar y trepar a los muebles. Es muy sociable con las personas.',
    },
    {
      id: 10,
      nombre: 'Simba',
      edad: '1 año',
      color: 'Anaranjado y blanco',
      raza: 'Gato doméstico de pelo corto',
      tiempo: '2 meses',
      descripcion:
        'Simba es un gatito curioso y juguetón. Se lleva bien con otros gatos y disfruta de los juegos interactivos.',
    },
  ];

  private mascota:Mascota[]=this.mascotas;

  getMascota(posicion: number):Mascota{
    return this.mascota[posicion];
  }
}
