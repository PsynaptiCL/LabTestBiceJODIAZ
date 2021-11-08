import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.componet'
import { BodyComponent } from './components/body/body.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';

//Importar rutas 
import { ROUTES } from './app.routes';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    IndicadoresComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true})
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
