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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Listado de personas';
  

}
