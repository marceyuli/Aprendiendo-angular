import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LogginService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [new Persona('Juan','Perez'),
   new Persona('Laura','Juarez'),
  new Persona('Carla', 'Lara')];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LoggingService){ }

  personaAgregada(persona: Persona){
    this.logginService.enviaMensajeAConsola("agregamos a persona: " + persona.nombre);
    this.personas.push(persona);
    
  }
  encontrarPersona(index:number){
    let persona: Persona = this.personas[index];
    return persona;
  }
  modificarPersona(index:number, persona: Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }
  eliminarPersona(index:number){
    this.personas.splice(index,1);
  }
}