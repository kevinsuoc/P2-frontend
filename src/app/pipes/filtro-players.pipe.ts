import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../jugador';

@Pipe({
  name: 'filtroPlayers',
})

export class FiltroPlayerPipe implements PipeTransform {
  transform(jugadores: Jugador[], filterType: string | undefined, filterValue: string | undefined): Jugador[] {
    if(!filterType || !jugadores || !filterValue) {
        return jugadores;
    } else if (Number(filterType) == 1) {
        return jugadores.filter((jugador) => jugador.Nombre.toLowerCase().includes(filterValue.toLowerCase()));
    } else if (Number(filterType) == 2) {
        return jugadores.filter((jugador) => jugador.Posicion.toLowerCase().includes(filterValue.toLowerCase()));
    } else if (Number(filterType) == 3)  {
        return jugadores.filter((jugador) => jugador.Edad.toString().includes(filterValue));
    }
    return jugadores
  }
}