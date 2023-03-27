import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'register', component:RegistroUsuarioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'user', component:ListaUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
