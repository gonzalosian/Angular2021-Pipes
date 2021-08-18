import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Gonzalo';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nPlural
  clientes: string[] = ['Maritza', 'Gonzalo', 'León', 'Leónidas'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void { }

  cambiarNombre(){
    this.nombre = 'Maritza';
    this.genero = 'femenino';
  }

  eliminarNombre(){
    this.clientes.pop();
  }

  agregarNombre(){
    this.clientes.push('Pepe')
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Gonzalo',
    edad: 34,
    ciudad: 'Rosario'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Espantapájaro',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: true
    },
    {
      nombre: 'Gatúbela',
      vuela: false
    },
    {
      nombre: 'Jocker',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise( (res, rej) => {
    setTimeout(() => {
      res('Tenemos data de promesa');
    }, 3500);
  } )

}
