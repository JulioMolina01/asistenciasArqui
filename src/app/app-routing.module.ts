import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { HomeComponent } from './components/home/home.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { RfidsComponent } from './components/rfids/rfids.component';
import { CreateAlumnoComponent } from './components/create-alumno/create-alumno.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { AsignarComponent } from './components/asignar/asignar.component';
import { CreateRfidComponent } from './components/create-rfid/create-rfid.component';
import { EditAlumnoComponent } from './components/edit-alumno/edit-alumno.component';
import { EditRfidComponent } from './components/edit-rfid/edit-rfid.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'customers',
    component: AlumnosComponent
  },
  {
    path: 'asistencia',
    component: AsistenciaComponent
  },
  {
    path: 'rfids',
    component: RfidsComponent
  },
  {
    path: 'createCustomer',
    component: CreateAlumnoComponent
  },
  {
    path: 'grupo',
    component: GrupoComponent
  },
  {
    path: 'asignar-RFID',
    component: AsignarComponent
  },
  {
    path: 'createRfid',
    component: CreateRfidComponent
  },
  {
    path: 'editCustomer/:id',
    component: EditAlumnoComponent
  },
  {
    path: 'editRfid/:id',
    component: EditRfidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
