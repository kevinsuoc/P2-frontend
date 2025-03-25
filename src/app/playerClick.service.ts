import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class playerClickService {
    private jugadorSubject = new Subject<Jugador | undefined>();
    jugador$ = this.jugadorSubject.asObservable();

    playerClicked(jugador: Jugador) {
        this.jugadorSubject.next(jugador);
    }

    playerHidden() {
        this.jugadorSubject.next(undefined);
    }
}