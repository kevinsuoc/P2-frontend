import { Injectable, inject } from '@angular/core';
import { Jugador, jugadorConverter } from './jugador';
import { Firestore, collection, onSnapshot, doc, updateDoc } from '@angular/fire/firestore';

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
                jugadores.sort((a, b) => {return a.Dorsal - b.Dorsal});
            }
        );
        return jugadores;
    }
    
    updateJugador(jugador: Jugador){
        
        const jugadorData: any = {
            id: jugador.id,
            Nombre: jugador.Nombre,
            Dorsal: jugador.Dorsal,
            Posicion: jugador.Posicion,
            Edad: jugador.Edad,
            Altura: jugador.Altura,
            Nacionalidad: jugador.Nacionalidad,
            Descripcion: jugador.Descripcion,
        };
        if (jugador.Image !== undefined)
            jugadorData.Image = jugador.Image;
        if (jugador.Video !== undefined)
            jugadorData.Video = jugador.Video;
        
        const jugadorDoc = doc(this.firestore, 'jugadores', jugador.id!).withConverter(jugadorConverter);
        return updateDoc(jugadorDoc, jugadorData);
    }
}