import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { ListaMusicasComponent } from './lista-musicas/lista-musicas.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MusicasComponent } from './musicas/musicas.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserComponent } from './user/user.component';
import { ArtistaComponent } from './artista/artista.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PlaylistUserComponent } from './playlist-user/playlist-user.component';
import { PlaylistCategoriaComponent } from './playlist-categoria/playlist-categoria.component';
import { PlaylistSeguidaComponent } from './playlist-seguida/playlist-seguida.component';
import { ArtistaAdminComponent } from './artista-admin/artista-admin.component';
import { AlbumComponent } from './album/album.component';
import { AlbumAdminComponent } from './album-admin/album-admin.component';
import { CadastraArtistaComponent } from './cadastra-artista/cadastra-artista.component';
import { CadastraAlbumComponent } from './cadastra-album/cadastra-album.component';
import { VisualizacaoAdminArtistasComponent } from './visualizacao-admin-artistas/visualizacao-admin-artistas.component';
import { PlaylistAdminComponent } from './playlist-admin/playlist-admin.component';
import { EditaMusicaComponent } from './edita-musica/edita-musica.component';
import { EditaAlbumComponent } from './edita-album/edita-album.component';
import { PlaylistsCategoriaComponent } from './playlists-categoria/playlists-categoria.component';
import { PlaylistsCategoriaAdminComponent } from './playlists-categoria-admin/playlists-categoria-admin.component';
import { BibliotecaUsuarioComponent } from './biblioteca-usuario/biblioteca-usuario.component';
import { EditaArtistaComponent } from './edita-artista/edita-artista.component';
import { CadastraPlaylistComponent } from './cadastra-playlist/cadastra-playlist.component';
import { EditarPlaylistComponent } from './editar-playlist/editar-playlist.component';
import { ResultadosPesquisaComponent } from './resultados-pesquisa/resultados-pesquisa.component';
import { CriarCategoriaComponent } from './criar-categoria/criar-categoria.component';
import { SelecionarPlaylistComponent } from './selecionar-playlist/selecionar-playlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lista-usuarios', component: UserlistingComponent},
  { path: 'lista-musicas', component: ListaMusicasComponent},
  { path: 'initial-page', component: InitialPageComponent},
  { path: 'userAdmin', component: UserAdminComponent},
  { path: 'user', component: UserComponent},
  { path: 'artista', component: ArtistaComponent},
  { path: 'userEdit', component: UserEditComponent},
  { path: 'playlistUser', component: PlaylistUserComponent },
  { path: 'playlistCategoria', component: PlaylistCategoriaComponent },
  { path: 'playlistSeguida', component: PlaylistSeguidaComponent },
  { path: 'visualizar-artistas-admin/:id/:nome/:genero_musical/:categoria/artistaAdmin', component: ArtistaAdminComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'albumAdmin/:id', component: AlbumAdminComponent },
  { path: 'albumAdmin/:albumId/cadastrar-musica', component: MusicasComponent },
  { path: 'cadastrar-artista', component: CadastraArtistaComponent },
  { path: 'visualizar-artistas-admin/:id/cadastrar-album', component: CadastraAlbumComponent },
  { path: 'visualizar-artistas-admin', component: VisualizacaoAdminArtistasComponent },
  { path: 'playlistAdmin/:id', component: PlaylistAdminComponent },
  { path: 'editar-musica/:id', component: EditaMusicaComponent },
  { path: 'editar-album/:id', component: EditaAlbumComponent },
  { path: 'playlistsCategoria', component: PlaylistsCategoriaComponent },
  { path: 'playlistsCategoriaAdmin', component: PlaylistsCategoriaAdminComponent },
  { path: 'bibliotecaUsuario', component: BibliotecaUsuarioComponent },
  { path: 'editar-playlist/:id', component: EditarPlaylistComponent },
  { path: 'editar-artista/:id', component: EditaArtistaComponent},
  { path: 'cadastraPlaylist', component: CadastraPlaylistComponent},
  { path: 'resultadosPesquisa', component: ResultadosPesquisaComponent},
  { path: 'cadastrar-categoria', component: CriarCategoriaComponent},
  { path: 'selecionarPlaylist', component: SelecionarPlaylistComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
