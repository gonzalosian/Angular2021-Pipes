import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayuscula: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];

  ordenarCampoPor: string = '';

  constructor() { }

  ngOnInit() {
    
  }

  cambiarMayuscula(){
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden(ordenarPor: string){
    this.ordenarCampoPor = ordenarPor;
  }

}