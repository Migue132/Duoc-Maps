import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'

import { MainComponent } from 'src/pages/main/main.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodPlaceComponent } from 'src/pages/food Place/foodPlace.component';
import { BibliotecaComponent } from 'src/pages/Biblioteca/Biblioteca.component';

import { FormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire//compat/storage';

//ENVIRONMENT
import { environment } from '../environments/environment.prod';

//AUTH GUARD
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { CalendarComponent } from 'src/pages/calendar/calendar.component';
import { CalendarModule } from 'ion2-calendar';
import { SalaComponent } from 'src/pages/Sala/sala.component';
import { PreguntasComponent } from 'src/pages/preguntas/preguntas.component';

import { EscuelasCarreraComponent } from 'src/pages/escuelas-carrera/escuelas-carrera.component';
import { ConsejeroCarreraComponent } from 'src/pages/consejero-carrera/consejero-carrera.component';
import { PuntoInteresComponent } from 'src/pages/punto-interes/punto-interes.component';
import { PuntoComponent } from 'src/pages/punto/punto.component';


@NgModule({
  declarations: [AppComponent,
     MainComponent, 
     SalaComponent,
     FoodPlaceComponent,
     BibliotecaComponent,
     CalendarComponent,
     PreguntasComponent,
     EscuelasCarreraComponent,
     ConsejeroCarreraComponent,
     PuntoInteresComponent,
     PuntoComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CalendarModule
  ],
  providers: [
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
