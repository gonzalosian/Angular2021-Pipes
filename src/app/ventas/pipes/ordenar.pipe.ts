import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarCampoPor: string ): Heroe[] {

    if(ordenarCampoPor==='nombre'){
      heroes = heroes.sort( ( a, b ) => ( a.nombre > b.nombre ) ? 1 : -1 );
    } else if(ordenarCampoPor==='vuela'){
      heroes = heroes.sort( ( a, b ) => ( a.vuela > b.vuela ) ? 1 : -1 );
    } else if(ordenarCampoPor==='color'){
      heroes = heroes.sort( ( a, b ) => ( a.color > b.color ) ? 1 : -1 );
    }
    
    // heroes = heroes.sort( ( a, b ) => ( a.nombre > b.nombre ) ? 1 : -1 );
    
    return heroes;
  }

}
