import { Component, EventEmitter, Output } from "@angular/core";
import { LoggingService } from "../LogginService.service";
import { Persona } from "../persona.model";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent  {

  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';

  constructor(private loggingService:LoggingService){ }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.loggingService.enviaMensajeAConsola("Enviamos persona " + persona1.nombre);
    this.personaCreada.emit(persona1);
  }

}
