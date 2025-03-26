import { Injectable, inject } from '@angular/core';
import { Jugador, jugadorConverter } from './jugador';
import { Subject } from 'rxjs';
import { Firestore, getDocs, collection, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class JugadorService {
    firestore: Firestore = inject(Firestore);

    getJugadores(): Jugador[]{
        const jugadores: Jugador[] = [];
        const unsubscribe = onSnapshot(
            collection(this.firestore, "jugadores").withConverter(jugadorConverter),
            (querySnapshot) => {
                jugadores.length = 0;
                querySnapshot.forEach((doc) => {
                    jugadores.push(doc.data());
                });
            }
        );
        return jugadores;
    }

    // async getJugadores(): Promise<Jugador[]> {

        
    //     const querySnapshot = await getDocs(collection(this.firestore, "jugadores").withConverter(jugadorConverter));
    //     return querySnapshot.docs.map(doc => doc.data());
    // }
}