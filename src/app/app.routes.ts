import { Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PaginaDetallesComponent } from './pagina-detalles/pagina-detalles.component';
import { PaginaBienvenidaComponent } from './pagina-bienvenida/pagina-bienvenida.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PaginaRegistroComponent } from './pagina-registro/pagina-registro.component';
import { PaginaCitasComponent } from './pagina-citas/pagina-citas.component';
import { PaginaBuscarComponent } from './pagina-buscar/pagina-buscar.component';
import { PaginaSomosComponent } from './pagina-somos/pagina-somos.component';
import { PaginaNosotrosComponent } from './pagina-nosotros/pagina-nosotros.component';

export const routes: Routes = [
    {path: 'home', component: PaginaInicioComponent},
    {path: 'bienvenida', component: PaginaBienvenidaComponent},
    {path: 'mascotas', component: MascotasComponent},
    {path: 'detalles/:id', component: PaginaDetallesComponent},
    {path: 'registro/:idRegistro', component: PaginaRegistroComponent},
    {path: 'citas', component: PaginaCitasComponent},
    {path: 'buscar/:nombre', component: PaginaBuscarComponent},
    {path: 'somos', component: PaginaSomosComponent },
    {path: 'nosotros', component: PaginaNosotrosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
