import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LogginService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Listado de personas';
  personas: Persona[] = [];
  
  constructor(private loggingService: LoggingService,
              private personasService: PersonasService){
    
  }
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

}
