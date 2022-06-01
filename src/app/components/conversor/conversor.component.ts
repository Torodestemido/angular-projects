import { Component, OnInit } from '@angular/core';

interface Escala {
  name: string,
  code: number
}

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})

export class ConversorComponent implements OnInit {

  escalas: Escala[] = [];

  constructor() { }

  test(){
    console.log(this.resultado,this.temperatura,this.escalaSelecionada,this.escalaparaconverter)
  }
  escalaSelecionada: any;
  resultado:number = 0;
  temperatura:number = 0;
  escalaparaconverter:any;

  ngOnInit(): void {
    this.escalas = [
      {code:0, name:'celsius'},
      {code:1, name:'Kelvin'},
      {code:2, name:'Fahnreheit'}
    ];

  }
}

