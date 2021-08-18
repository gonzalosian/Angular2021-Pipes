import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'gonzalo';
  nombreUpper: string = 'GONZALO';
  nombreCompleto: string = 'goNZAlo lEonado siAN';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
