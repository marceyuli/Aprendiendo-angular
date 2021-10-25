import { Component, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoggingService } from "../../LogginService.service";
import { Persona } from "../../persona.model";
import { PersonasService } from "../../personas.service";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent  {

 // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;

  constructor(private loggingService:LoggingService,
              private personasService: PersonasService,
              private router: Router,
              private route: ActivatedRoute){ 
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es " + indice)
                );
              }

  ngOnInit(){
    this.index = this.route.snapshot.params['id']; //como esta en app routing
    if(this.index){ //estamos en modo edicion
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    } 
  }
  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.index){ //estoy en modo edicion
      this.personasService.modificarPersona(this.index,persona1);
    }else{ //estoy agregando una nueva persona
    this.personasService.personaAgregada(persona1);
    }
    this.router.navigate(['personas']);
  }
  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
