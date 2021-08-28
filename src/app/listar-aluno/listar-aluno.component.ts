import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  item : Aluno = {
    name : "Pedro",
    entryDate : "01/01/2032",
    graduationDate: "01/01/2036"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// Pedro Henrique Christinelli Serra - SC3001563