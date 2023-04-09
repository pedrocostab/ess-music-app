import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
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
// import { MusicasComponent } from './musicas/musicas.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'lista-usuarios', component:UserlistingComponent, canActivate:[AuthGuard]},
  {path: 'lista-musicas', component: ListaMusicasComponent, canActivate:[AuthGuard]},
  {path: 'initial-page', component: InitialPageComponent, canActivate:[AuthGuard]},
  {path: 'userAdmin', component: UserAdminComponent, canActivate:[AuthGuard]},
  {path: 'user', component: UserComponent, canActivate:[AuthGuard]},
  {path: 'artista', component: ArtistaComponent, canActivate:[AuthGuard]},
  {path: 'userEdit', component: UserEditComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }