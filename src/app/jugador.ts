export interface Jugador {
    id: number;
    Nombre: string;
    Dorsal: number;
    Posicion: string;
    Edad: number;
    Altura: string;
    Nacionalidad: string;
    Descripcion: string;
}

export const jugadorConverter = {
    toFirestore: (jugador: Jugador) => {
        return {
            id: jugador.id,
            Nombre: jugador.Nombre,
            Dorsal:jugador.Dorsal,
            Posicion:jugador.Posicion,
            Edad:jugador.Edad,
            Altura:jugador.Altura,
            Nacionalidad:jugador.Nacionalidad,
            Descripcion: jugador.Descripcion
            };
    },
    fromFirestore: (snapshot: any, options: any) => {
        let jugador: Jugador;

        const data = snapshot.data(options);
        jugador = {
            id: data.id,
            Nombre: data.Nombre,
            Dorsal: data.Dorsal,
            Posicion: data.Posicion,
            Edad: data.Edad,
            Altura: data.Altura,
            Nacionalidad: data.Nacionalidad,
            Descripcion: data.Descripcion
        }
        return jugador;
    }
};