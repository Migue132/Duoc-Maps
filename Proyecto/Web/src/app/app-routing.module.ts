import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/pages/main/main.component';
import { SalaComponent } from 'src/pages/Sala/sala.component';

import { CalendarComponent } from 'src/pages/calendar/calendar.component';
import { PreguntasComponent } from 'src/pages/preguntas/preguntas.component';

import { EscuelasCarreraComponent } from 'src/pages/escuelas-carrera/escuelas-carrera.component';
import { ConsejeroCarreraComponent } from 'src/pages/consejero-carrera/consejero-carrera.component';
import { PuntoInteresComponent } from 'src/pages/punto-interes/punto-interes.component';
import { PuntoComponent } from 'src/pages/punto/punto.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },{
    path: 'calendario',
    component: CalendarComponent,
  },
  {
    path: 'Sala',
    component: SalaComponent,
  },
  {
    path: 'preguntas',
    component: PreguntasComponent
  },
  {
    path: 'escuelas-carrera',
    component: EscuelasCarreraComponent
  },
  {
    path: 'escuelas-carrera/:escuela',
    component: ConsejeroCarreraComponent
  },
  {
    path: 'punto-interes',
    component: PuntoInteresComponent
  },
  {
    path: 'punto-interes/:puntoInteres',
    component: PuntoComponent
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
