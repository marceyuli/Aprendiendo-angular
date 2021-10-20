import { Component, Injectable } from "@angular/core";
import { LoggingService } from "../LogginService.service";
import { Persona } from "../persona.model";
import { PersonasService } from "../personas.service";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent  {

 // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';

  constructor(private loggingService:LoggingService,
              private personasService: PersonasService){ 
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es " + indice)
                );
              }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
  //  this.loggingService.enviaMensajeAConsola("Enviamos persona " + persona1.nombre);
    //this.personaCreada.emit(persona1);
    this.personasService.personaAgregada(persona1);
  }

}
