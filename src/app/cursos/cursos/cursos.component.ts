import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent  {

  //criando dataSource
  cursos$: Observable<Curso[]>;
  displayedColumns = ['name', 'categoria'];



  //injeção de dependencia
  //cursosService : CursosService;

  //pode ser feito assim, inicializando pelo contrutor
  constructor(private cursosService : CursosService) {
    //this.cursos = [];
    //this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.list();
 }

}
