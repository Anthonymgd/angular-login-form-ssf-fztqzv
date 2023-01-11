import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTING } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './services/firebase.service';
import { PeopleService } from './services/people.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAIfu2eLHvD1bFRF-hR1s8KPNrO0b_AH_g',
      authDomain: 'proyectou2-programavanzada.firebaseapp.com',
      databaseURL:
        'https://proyectou2-programavanzada-default-rtdb.firebaseio.com',
      projectId: 'proyectou2-programavanzada',
      storageBucket: 'proyectou2-programavanzada.appspot.com',
      messagingSenderId: '569146864743',
      appId: '1:569146864743:web:02d14cfadc973dde1950c2',
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TemplateComponent,
    FooterComponent,
    LandingComponent,
    ComprobanteComponent,
    TransaccionesComponent,
    ConfirmacionComponent,
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService, PeopleService],
})
export class AppModule {}
