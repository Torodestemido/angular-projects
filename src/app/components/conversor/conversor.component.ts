import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Escala } from 'src/app/models/escala';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})

export class ConversorComponent implements OnInit {

  escalas: Escala[] = [];

  constructor() { }

  teste1:string = 'teste'
  teste2:string = 'testes'

  resultado:number = 0 ;
  temperatura:number = 0;
  escalaSelecionada:Escala = new Escala ;
  escalaparaconverter:Escala = new Escala ;



  ngOnInit(): void {
    this.escalas = [
      {code:1, name:'Celsius'},
      {code:2, name:'Kelvin'},
      {code:3, name:'Fahnreheit'}
    ];

  }

  resolver(){

    // console.log(this.resultado,this.temperatura,this.escalaSelecionada,this.escalaparaconverter);
    // console.log(this.temperatura)

    if(this.escalaSelecionada.code == 1 && this.escalaparaconverter.code == 1 ) {
      this.resultado = this.temperatura
      console.log("c + c") }

    if(this.escalaSelecionada.code == 1 && this.escalaparaconverter.code == 2 ) {

      this.resultado = this.temperatura + 273.15
      console.log("c + k") }

    if(this.escalaSelecionada.code == 2 && this.escalaparaconverter.code == 1 ) {

      this.resultado = this.temperatura - 273.15
      console.log("k + c") }

    if(this.escalaSelecionada.code == 1 && this.escalaparaconverter.code == 3 ) {

      this.resultado = (this.temperatura * 9/5) + 32
      console.log("c + k") }

    if(this.escalaSelecionada.code == 3 && this.escalaparaconverter.code == 1 ) {

      this.resultado = (this.temperatura - 32 ) * 5/9
      console.log("k + c") }

    if(this.escalaSelecionada.code == 2 && this.escalaparaconverter.code == 2 ) {
      this.resultado = this.temperatura
      console.log("K + K") }

    if(this.escalaSelecionada.code == 3 && this.escalaparaconverter.code == 3 ) {
      this.resultado = this.temperatura
      console.log("F + F") }

    



  }
}
