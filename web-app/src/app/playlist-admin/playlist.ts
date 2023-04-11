import { Musica } from "../musicas/musica";

type user = {
    id: "",
    name: "",
    password: "",
    email: "",
    gender: "",
    role: "",
    isactive: "",
    historico: []
}

export class Playlist {
    id: number = 0;
    titulo: string = '';
    privacidade: string = '';
    url_foto_playlist: string = '';
    categoria: string = '';
    usuario_dono: {
        id: string,
        name: string,
        password: string,
        email: string,
        gender: string,
        role: string,
        isactive: boolean,
        historico: []
    } = {
        id: "",
        name: "",
        password: "",
        email: "",
        gender: "",
        role: "",
        isactive: true,
        historico: []
    }
    musicas: Musica[] = [];
    constructor() {}
}