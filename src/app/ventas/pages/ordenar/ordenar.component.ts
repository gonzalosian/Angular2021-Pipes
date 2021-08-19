import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayuscula: boolean = false;
  products!: [];

  constructor() { }

  ngOnInit() {
    
  }

  cambiarMayuscula(){
    this.enMayuscula = !this.enMayuscula;
  }

}
