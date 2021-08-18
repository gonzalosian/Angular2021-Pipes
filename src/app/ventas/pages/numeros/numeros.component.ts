import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 32658971.5686;
  porcentaje: number = 0.8597;

  constructor() { }

  ngOnInit(): void {
  }

}
