import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LogginService.service';

@NgModule({
  declarations: [
    AppComponent, PersonaComponent, FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
