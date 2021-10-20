import { Component } from '@angular/core';
import { LoggingService } from './LogginService.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de personas';
  personas: Persona[] = [new Persona('Juan','Perez'),
   new Persona('Laura','Juarez'),
  new Persona('Carla', 'Lara')];
  
  constructor(private loggingService: LoggingService){
    
  }

  personaAgregada(persona: Persona){
    this.loggingService.enviaMensajeAConsola("agregamos al arreglo la nueva persona" + persona.nombre);
    this.personas.push(persona);
  }
}
