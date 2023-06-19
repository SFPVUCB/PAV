import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos el modulo de formularios
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //añadimos a las importaciones el nuevo modulo
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
