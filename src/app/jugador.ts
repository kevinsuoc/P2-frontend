import { FirestoreDataConverter } from "@angular/fire/firestore";

export interface Jugador {
    id?: string;
    Nombre: string;
    Dorsal: number;
    Posicion: string;
    Edad: number;
    Altura: string;
    Nacionalidad: string;
    Descripcion: string;
    Image?: string;
    Video?: string;
}

export const jugadorConverter  :FirestoreDataConverter<Jugador> = {
    toFirestore: (jugador: Jugador) => {
        return {
            Nombre: jugador.Nombre,
            Dorsal:jugador.Dorsal,
            Posicion:jugador.Posicion,
            Edad:jugador.Edad,
            Altura:jugador.Altura,
            Nacionalidad:jugador.Nacionalidad,
            Descripcion: jugador.Descripcion,
            Image: jugador.Image,
            Video: jugador.Video
            };
    },
    fromFirestore: (snapshot: any, options: any) => {
        let jugador: Jugador;

        const data = snapshot.data(options);
        jugador = {
            id: snapshot.id,
            Nombre: data.Nombre,
            Dorsal: data.Dorsal,
            Posicion: data.Posicion,
            Edad: data.Edad,
            Altura: data.Altura,
            Nacionalidad: data.Nacionalidad,
            Descripcion: data.Descripcion,
            Image: data.Image,
            Video: data.Video
        }
        return jugador;
    }
};